import { AppDataSource } from "../../data-source";
import { Issuer } from "../../entities";
import { Repository } from "typeorm";

const createIssuerService = async (data: any) => {
	const issuerRepository: Repository<Issuer> = AppDataSource.getRepository(Issuer);

	const newIssuer = issuerRepository.create({
		...data,
	});

	const createdIssuer = await issuerRepository.save(newIssuer);

	return createdIssuer;
};

export { createIssuerService };
