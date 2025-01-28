import { AppDataSource } from "data-source";
import { Costumer } from "../../entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const updateCostumerService = async (data: any, costumerId: string) => {
	const costumerRepository: Repository<Costumer> = AppDataSource.getRepository(Costumer);

	const oldCostumer: Costumer | null = await costumerRepository.findOne({
		where: { id: costumerId },
	});

	if (!oldCostumer) {
		throw new AppError("Costumer not found", 404);
	}

	const costumerProperties = Object.keys(oldCostumer);

	costumerProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldCostumer as any)[property] = data[property];
		}
	});

	const updatedCostumer = await costumerRepository.save(oldCostumer);

	return updatedCostumer;
};

export { updateCostumerService };
