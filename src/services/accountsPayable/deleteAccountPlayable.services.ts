import { AppDataSource } from "data-source";
import { AccountsPayable } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteAccountsPayableService = async (accountsPayableId: string) => {
	const accountsPayableRepository: Repository<AccountsPayable> = AppDataSource.getRepository(AccountsPayable);

	const accountsPayable: AccountsPayable | null = await accountsPayableRepository.findOne({
		where: { id: accountsPayableId },
	});

	if (!accountsPayable) {
		throw new AppError("AccountsPayable not found", 404);
	}

	await accountsPayableRepository.remove(accountsPayable);

	return;
};

export { deleteAccountsPayableService };
