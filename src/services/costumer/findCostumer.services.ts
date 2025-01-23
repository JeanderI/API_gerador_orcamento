import { AppDataSource } from "data-source";
import { Customer } from "entities";
import AppError from "errors/AppErrors";

const findCustomerService = async (customerId: string) => {
	const customerRepository = AppDataSource.getRepository(Customer);

	const customer = await customerRepository.findOne({
		where: { id: customerId },
	});

	if (!customer) {
		throw new AppError("Customer not found", 404);
	}

	return customer;
};

export { findCustomerService };
