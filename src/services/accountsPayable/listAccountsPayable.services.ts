import { AppDataSource } from "../../data-source";
import { AccountPayable } from "../../entities";

const listAccountsPayableService = async () => {
	const accountsPayableRepository = AppDataSource.getRepository(AccountPayable);

	const accountsPayable = await accountsPayableRepository.find({
		relations: ["issuer"],
	});

	return accountsPayable;
};

export { listAccountsPayableService };
