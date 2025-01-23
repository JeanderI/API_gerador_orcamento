import { AccountsPayable } from "entities";
import { AppDataSource } from "../../data-source";

const listAccountsPayableService = async () => {
	const accountsPayableRepository = AppDataSource.getRepository(AccountsPayable);

	const accountsPayable = await accountsPayableRepository.find();

	return accountsPayable;
};

export { listAccountsPayableService };
