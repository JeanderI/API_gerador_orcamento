import { AppDataSource } from "data-source";
import { AccountReceivable } from "../../entities";
import AppError from "errors/AppErrors";

const findAccountsReceivableService = async (accountsReceivableId: string) => {
	const accountsReceivableRepository = AppDataSource.getRepository(AccountReceivable);

	const accountsReceivable = await accountsReceivableRepository.findOne({
		where: { id: accountsReceivableId },
	});

	if (!accountsReceivable) {
		throw new AppError("AccountsReceivable not found", 404);
	}

	return accountsReceivable;
};

export { findAccountsReceivableService };
