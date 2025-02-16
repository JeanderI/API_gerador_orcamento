import { AccountReceivable } from "../../entities";
import { AppDataSource } from "../../data-source";

const listAccountsReceivableService = async () => {
	const accountsReceivableRepository =
		AppDataSource.getRepository(AccountReceivable);

	const accountsReceivable = await accountsReceivableRepository.find({
		relations: ["client"],
	});

	return accountsReceivable;
};

export { listAccountsReceivableService };
