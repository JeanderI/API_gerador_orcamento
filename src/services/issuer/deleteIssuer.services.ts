import { AppDataSource } from "data-source";
import { Issuer } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteIssuerService = async (issuerId: string) => {
	const issuerRepository: Repository<Issuer> = AppDataSource.getRepository(Issuer);

	const issuer: Issuer | null = await issuerRepository.findOne({
		where: { id: issuerId },
	});

	if (!issuer) {
		throw new AppError("Issuer not found", 404);
	}

	await issuerRepository.remove(issuer);

	return;
};

export { deleteIssuerService };
