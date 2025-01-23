import { AppDataSource } from "data-source";
import { Customer } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteCustomerService = async (customerId: string) => {
	const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

	const customer: Customer | null = await customerRepository.findOne({
		where: { id: customerId },
	});

	if (!customer) {
		throw new AppError("Customer not found", 404);
	}

	await customerRepository.remove(customer);

	return;
};

export { deleteCustomerService };
