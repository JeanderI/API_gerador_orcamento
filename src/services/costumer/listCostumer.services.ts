import { Customer } from "entities";
import { AppDataSource } from "../../data-source";

const listCustomerService = async () => {
	const customerRepository = AppDataSource.getRepository(Customer);

	const customers = await customerRepository.find();

	return customers;
};

export { listCustomerService };
