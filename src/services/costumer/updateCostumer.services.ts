import { AppDataSource } from "data-source";
import { Customer } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const updateCustomerService = async (data: any, customerId: string) => {
	const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

	const oldCustomer: Customer | null = await customerRepository.findOne({
		where: { id: customerId },
	});

	if (!oldCustomer) {
		throw new AppError("Customer not found", 404);
	}

	const customerProperties = Object.keys(oldCustomer);

	customerProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldCustomer as any)[property] = data[property];
		}
	});

	const updatedCustomer = await customerRepository.save(oldCustomer);

	return updatedCustomer;
};

export { updateCustomerService };
