import { Issuer } from "../../entities";
import { AppDataSource } from "../../data-source";

const listIssuerService = async () => {
	const issuerRepository = AppDataSource.getRepository(Issuer);

	const issuers = await issuerRepository.find();

	return issuers;
};

export { listIssuerService };
