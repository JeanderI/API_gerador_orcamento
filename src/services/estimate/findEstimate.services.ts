import { AppDataSource } from "data-source";
import { Estimate } from "entities";
import AppError from "errors/AppErrors";

const findEstimateService = async (estimateId: string) => {
	const estimateRepository = AppDataSource.getRepository(Estimate);

	const estimate = await estimateRepository.findOne({
		where: { id: estimateId },
	});

	if (!estimate) {
		throw new AppError("Estimate not found", 404);
	}

	return estimate;
};

export { findEstimateService };
