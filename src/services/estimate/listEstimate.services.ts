import { Estimate } from "entities";
import { AppDataSource } from "../../data-source";

const listEstimateService = async () => {
	const estimateRepository = AppDataSource.getRepository(Estimate);

	const estimates = await estimateRepository.find();

	return estimates;
};

export { listEstimateService };
