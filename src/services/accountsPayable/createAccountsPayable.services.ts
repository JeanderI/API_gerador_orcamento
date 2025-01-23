import { AppDataSource } from "data-source";
import { AccountsPayable } from "entities";
import { Repository } from "typeorm";

const createAccountsPayableService = async (data: any) => {
	const accountsPayableRepository: Repository<AccountsPayable> = AppDataSource.getRepository(AccountsPayable);

	const newAccountsPayable = accountsPayableRepository.create({
		...data,
	});

	const createdAccountsPayable = await accountsPayableRepository.save(newAccountsPayable);

	return createdAccountsPayable;
};

export { createAccountsPayableService };
