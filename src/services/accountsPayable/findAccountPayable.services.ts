import { AppDataSource } from "data-source";
import { AccountsPayable } from "entities";
import AppError from "errors/AppErrors";

const findAccountsPayableService = async (accountsPayableId: string) => {
	const accountsPayableRepository = AppDataSource.getRepository(AccountsPayable);

	const accountsPayable = await accountsPayableRepository.findOne({
		where: { id: accountsPayableId },
	});

	if (!accountsPayable) {
		throw new AppError("AccountsPayable not found", 404);
	}

	return accountsPayable;
};

export { findAccountsPayableService };
