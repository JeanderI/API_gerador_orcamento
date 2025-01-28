import { AppDataSource } from "data-source";
import { Costumer } from "../../entities";
import { Repository } from "typeorm";

const createCostumerService = async (data: any) => {
	const costumerRepository: Repository<Costumer> = AppDataSource.getRepository(Costumer);

	const newCostumer = costumerRepository.create({
		...data,
	});

	const createdCostumer = await costumerRepository.save(newCostumer);

	return createdCostumer;
};

export { createCostumerService };
