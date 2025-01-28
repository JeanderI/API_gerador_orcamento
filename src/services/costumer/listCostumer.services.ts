import { Costumer } from "../../entities";
import { AppDataSource } from "../../data-source";

const listCostumerService = async () => {
	const costumerRepository = AppDataSource.getRepository(Costumer);

	const costumers = await costumerRepository.find();

	return costumers;
};

export { listCostumerService };
