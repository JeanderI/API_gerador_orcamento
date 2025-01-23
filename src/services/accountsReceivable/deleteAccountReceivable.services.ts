import { AppDataSource } from "data-source";
import { AccountsReceivable } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteAccountsReceivableService = async (accountsReceivableId: string) => {
	const accountsReceivableRepository: Repository<AccountsReceivable> = AppDataSource.getRepository(AccountsReceivable);

	const accountsReceivable: AccountsReceivable | null = await accountsReceivableRepository.findOne({
		where: { id: accountsReceivableId },
	});

	if (!accountsReceivable) {
		throw new AppError("AccountsReceivable not found", 404);
	}

	await accountsReceivableRepository.remove(accountsReceivable);

	return;
};

export { deleteAccountsReceivableService };
