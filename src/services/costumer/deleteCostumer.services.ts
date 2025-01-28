import { AppDataSource } from "data-source";
import { Costumer } from "../../entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteCostumerService = async (costumerId: string) => {
	const costumerRepository: Repository<Costumer> = AppDataSource.getRepository(Costumer);

	const costumer: Costumer | null = await costumerRepository.findOne({
		where: { id: costumerId },
	});

	if (!costumer) {
		throw new AppError("Costumer not found", 404);
	}

	await costumerRepository.remove(costumer);

	return;
};

export { deleteCostumerService };
