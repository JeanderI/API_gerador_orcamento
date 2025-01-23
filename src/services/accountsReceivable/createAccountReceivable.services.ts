import { AppDataSource } from "data-source";
import { AccountsReceivable } from "entities";
import { Repository } from "typeorm";

const createAccountsReceivableService = async (data: any) => {
	const accountsReceivableRepository: Repository<AccountsReceivable> = AppDataSource.getRepository(AccountsReceivable);

	const newAccountsReceivable = accountsReceivableRepository.create({
		...data,
	});

	const createdAccountsReceivable = await accountsReceivableRepository.save(newAccountsReceivable);

	return createdAccountsReceivable;
};

export { createAccountsReceivableService };
