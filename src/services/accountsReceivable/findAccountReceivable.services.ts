import { AppDataSource } from "data-source";
import { AccountsReceivable } from "entities";
import AppError from "errors/AppErrors";

const findAccountsReceivableService = async (accountsReceivableId: string) => {
	const accountsReceivableRepository = AppDataSource.getRepository(AccountsReceivable);

	const accountsReceivable = await accountsReceivableRepository.findOne({
		where: { id: accountsReceivableId },
	});

	if (!accountsReceivable) {
		throw new AppError("AccountsReceivable not found", 404);
	}

	return accountsReceivable;
};

export { findAccountsReceivableService };
