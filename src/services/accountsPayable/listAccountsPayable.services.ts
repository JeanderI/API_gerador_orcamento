import { AppDataSource } from "../../data-source";
import { AccountPayable } from "../../entities";

const listAccountsPayableService = async () => {
	const accountsPayableRepository = AppDataSource.getRepository(AccountPayable);

	const accountsPayable = await accountsPayableRepository.find();

	return accountsPayable;
};

export { listAccountsPayableService };
