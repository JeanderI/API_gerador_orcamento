import { AppDataSource } from "data-source";
import { Issuer } from "../../entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const updateIssuerService = async (data: any, issuerId: string) => {
	const issuerRepository: Repository<Issuer> = AppDataSource.getRepository(Issuer);

	const oldIssuer: Issuer | null = await issuerRepository.findOne({
		where: { id: issuerId },
	});

	if (!oldIssuer) {
		throw new AppError("Issuer not found", 404);
	}

	const issuerProperties = Object.keys(oldIssuer);

	issuerProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldIssuer as any)[property] = data[property];
		}
	});

	const updatedIssuer = await issuerRepository.save(oldIssuer);

	return updatedIssuer;
};

export { updateIssuerService };
