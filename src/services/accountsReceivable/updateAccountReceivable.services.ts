import { AppDataSource } from "data-source";
import { AccountsReceivable } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const updateAccountsReceivableService = async (data: any, accountsReceivableId: string) => {
	const accountsReceivableRepository: Repository<AccountsReceivable> = AppDataSource.getRepository(AccountsReceivable);

	const oldAccountsReceivable: AccountsReceivable | null = await accountsReceivableRepository.findOne({
		where: { id: accountsReceivableId },
	});

	if (!oldAccountsReceivable) {
		throw new AppError("AccountsReceivable not found", 404);
	}

	const accountsReceivableProperties = Object.keys(oldAccountsReceivable);

	accountsReceivableProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldAccountsReceivable as any)[property] = data[property];
		}
	});

	const updatedAccountsReceivable = await accountsReceivableRepository.save(oldAccountsReceivable);

	return updatedAccountsReceivable;
};

export { updateAccountsReceivableService };
