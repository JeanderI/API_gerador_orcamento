import { AppDataSource } from "data-source";
import { Estimate } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const updateEstimateService = async (data: any, estimateId: string) => {
	const estimateRepository: Repository<Estimate> = AppDataSource.getRepository(Estimate);

	const oldEstimate: Estimate | null = await estimateRepository.findOne({
		where: { id: estimateId },
	});

	if (!oldEstimate) {
		throw new AppError("Estimate not found", 404);
	}

	const estimateProperties = Object.keys(oldEstimate);

	estimateProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldEstimate as any)[property] = data[property];
		}
	});

	const updatedEstimate = await estimateRepository.save(oldEstimate);

	return updatedEstimate;
};

export { updateEstimateService };
