import { Request, Response } from "express";
import { createCustomerService } from "../services/costumer/createCostumer.services";
import { listCustomerService } from "../services/costumer/listCostumer.services";
import { findCustomerService } from "../services/costumer/findCostumer.services";
import { updateCustomerService } from "../services/costumer/updateCostumer.services";
import { deleteCustomerService } from "../services/costumer/deleteCostumer.services";

const createCustomerController = async (req: Request, res: Response) => {
	const customerData = req.body;
	const newCustomer = await createCustomerService(customerData);

	return res.status(201).json(newCustomer);
};

const listCustomerController = async (req: Request, res: Response) => {
	const customers = await listCustomerService();

	return res.status(200).json(customers);
};

const findCustomerController = async (req: Request, res: Response) => {
	const customerId = req.params.id;
	const customer = await findCustomerService(customerId);

	return res.status(200).json(customer);
};

const updateCustomerController = async (req: Request, res: Response) => {
	const customerData = req.body;
	const idCustomer = req.params.id;
	const updatedCustomer = await updateCustomerService(customerData, idCustomer);

	return res.status(200).json(updatedCustomer);
};

const deleteCustomerController = async (req: Request, res: Response) => {
	await deleteCustomerService(req.params.id);

	return res.status(204).send();
};

export {
	createCustomerController,
	listCustomerController,
	findCustomerController,
	updateCustomerController,
	deleteCustomerController,
};
