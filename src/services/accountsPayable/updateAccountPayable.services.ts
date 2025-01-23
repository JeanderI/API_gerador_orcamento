import { AppDataSource } from "data-source";
import { AccountsPayable } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const updateAccountsPayableService = async (data: any, accountsPayableId: string) => {
	const accountsPayableRepository: Repository<AccountsPayable> = AppDataSource.getRepository(AccountsPayable);

	const oldAccountsPayable: AccountsPayable | null = await accountsPayableRepository.findOne({
		where: { id: accountsPayableId },
	});

	if (!oldAccountsPayable) {
		throw new AppError("AccountsPayable not found", 404);
	}

	const accountsPayableProperties = Object.keys(oldAccountsPayable);

	accountsPayableProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldAccountsPayable as any)[property] = data[property];
		}
	});

	const updatedAccountsPayable = await accountsPayableRepository.save(oldAccountsPayable);

	return updatedAccountsPayable;
};

export { updateAccountsPayableService };
