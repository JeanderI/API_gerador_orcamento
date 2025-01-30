import { AppDataSource } from "data-source";
import { AccountReceivable } from "../../entities";
import { Repository } from "typeorm";

const createAccountsReceivableService = async (data: any) => {
	const accountsReceivableRepository: Repository<AccountReceivable> = AppDataSource.getRepository(AccountReceivable);

	const newAccountsReceivable = accountsReceivableRepository.create({
		...data,
	});

	const createdAccountsReceivable = await accountsReceivableRepository.save(newAccountsReceivable);

	return createdAccountsReceivable;
};

export { createAccountsReceivableService };
