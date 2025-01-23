import { AppDataSource } from "data-source";
import { Estimate } from "entities";
import { Repository } from "typeorm";

const createEstimateService = async (data: any) => {
	const estimateRepository: Repository<Estimate> = AppDataSource.getRepository(Estimate);

	const newEstimate = estimateRepository.create({
		...data,
	});

	const createdEstimate = await estimateRepository.save(newEstimate);

	return createdEstimate;
};

export { createEstimateService };
