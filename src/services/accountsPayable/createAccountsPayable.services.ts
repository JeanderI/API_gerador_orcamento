import { AppDataSource } from "data-source";
import { AccountPayable } from "../../entities";
import { Repository } from "typeorm";

const createAccountsPayableService = async (data: any) => {
	const accountsPayableRepository: Repository<AccountPayable> = AppDataSource.getRepository(AccountPayable);

	const newAccountsPayable = accountsPayableRepository.create({
		...data,
	});

	const createdAccountsPayable = await accountsPayableRepository.save(newAccountsPayable);

	return createdAccountsPayable;
};

export { createAccountsPayableService };
