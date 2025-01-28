import { AppDataSource } from "data-source";
import { Costumer } from "../../entities";
import AppError from "errors/AppErrors";

const findCostumerService = async (costumerId: string) => {
	const costumerRepository = AppDataSource.getRepository(Costumer);

	const costumer = await costumerRepository.findOne({
		where: { id: costumerId },
	});

	if (!costumer) {
		throw new AppError("Costumer not found", 404);
	}

	return costumer;
};

export { findCostumerService };
