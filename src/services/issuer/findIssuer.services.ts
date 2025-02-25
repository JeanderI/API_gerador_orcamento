import { AppDataSource } from "../../data-source";
import { Issuer } from "../../entities";
import AppError from "../../errors/AppErrors";

const findIssuerService = async (issuerId: string) => {
	const issuerRepository = AppDataSource.getRepository(Issuer);

	const issuer = await issuerRepository.findOne({
		where: { id: issuerId },
	});

	if (!issuer) {
		throw new AppError("Issuer not found", 404);
	}

	return issuer;
};

export { findIssuerService };
