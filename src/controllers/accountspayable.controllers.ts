import { Request, Response } from "express";
import { createAccountsPayableService } from "../services/accountsPayable/createAccountsPayable.services";
import { listAccountsPayableService } from "../services/accountsPayable/listAccountsPayable.services";
import { findAccountsPayableService } from "../services/accountsPayable/findAccountPayable.services";
import { updateAccountsPayableService } from "../services/accountsPayable/updateAccountPayable.services";
import { deleteAccountsPayableService } from "../services/accountsPayable/deleteAccountPlayable.services";

const createAccountsPayableController = async (req: Request, res: Response) => {
	const accountsPayableData = req.body;
	const newAccountsPayable = await createAccountsPayableService(accountsPayableData);

	return res.status(201).json(newAccountsPayable);
};

const listAccountsPayableController = async (req: Request, res: Response) => {
	const accountsPayable = await listAccountsPayableService();

	return res.status(200).json(accountsPayable);
};

const findAccountsPayableController = async (req: Request, res: Response) => {
	const accountsPayableId = req.params.id;
	const accountsPayable = await findAccountsPayableService(accountsPayableId);

	return res.status(200).json(accountsPayable);
};

const updateAccountsPayableController = async (req: Request, res: Response) => {
	const accountsPayableData = req.body;
	const idAccountsPayable = req.params.id;
	const updatedAccountsPayable = await updateAccountsPayableService(accountsPayableData, idAccountsPayable);

	return res.status(200).json(updatedAccountsPayable);
};

const deleteAccountsPayableController = async (req: Request, res: Response) => {
	await deleteAccountsPayableService(req.params.id);

	return res.status(204).send();
};

export {
	createAccountsPayableController,
	listAccountsPayableController,
	findAccountsPayableController,
	updateAccountsPayableController,
	deleteAccountsPayableController,
};
