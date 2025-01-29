import { AppDataSource } from "../../data-source";
import { Estimate } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const deleteEstimateService = async (estimateId: string) => {
	const estimateRepository: Repository<Estimate> = AppDataSource.getRepository(Estimate);

	const estimate: Estimate | null = await estimateRepository.findOne({
		where: { id: estimateId },
	});

	if (!estimate) {
		throw new AppError("Estimate not found", 404);
	}

	await estimateRepository.remove(estimate);

	return;
};

export { deleteEstimateService };
