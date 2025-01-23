import { AppDataSource } from "data-source";
import { Customer } from "entities";
import { Repository } from "typeorm";

const createCustomerService = async (data: any) => {
	const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

	const newCustomer = customerRepository.create({
		...data,
	});

	const createdCustomer = await customerRepository.save(newCustomer);

	return createdCustomer;
};

export { createCustomerService };
