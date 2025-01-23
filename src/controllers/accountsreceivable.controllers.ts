import { Request, Response } from "express";
import { createAccountsReceivableService } from "../services/accountsReceivable/createAccountReceivable.services";
import { listAccountsReceivableService } from "../services/accountsReceivable/listAccountsReceivable.services";
import { findAccountsReceivableService } from "../services/accountsReceivable/findAccountReceivable.services";
import { updateAccountsReceivableService } from "../services/accountsReceivable/updateAccountReceivable.services";
import { deleteAccountsReceivableService } from "../services/accountsReceivable/deleteAccountReceivable.services";

const createAccountsReceivableController = async (req: Request, res: Response) => {
	const accountsReceivableData = req.body;
	const newAccountsReceivable = await createAccountsReceivableService(accountsReceivableData);

	return res.status(201).json(newAccountsReceivable);
};

const listAccountsReceivableController = async (req: Request, res: Response) => {
	const accountsReceivable = await listAccountsReceivableService();

	return res.status(200).json(accountsReceivable);
};

const findAccountsReceivableController = async (req: Request, res: Response) => {
	const accountsReceivableId = req.params.id;
	const accountsReceivable = await findAccountsReceivableService(accountsReceivableId);

	return res.status(200).json(accountsReceivable);
};

const updateAccountsReceivableController = async (req: Request, res: Response) => {
	const accountsReceivableData = req.body;
	const idAccountsReceivable = req.params.id;
	const updatedAccountsReceivable = await updateAccountsReceivableService(accountsReceivableData, idAccountsReceivable);

	return res.status(200).json(updatedAccountsReceivable);
};

const deleteAccountsReceivableController = async (req: Request, res: Response) => {
	await deleteAccountsReceivableService(req.params.id);

	return res.status(204).send();
};

export {
	createAccountsReceivableController,
	listAccountsReceivableController,
	findAccountsReceivableController,
	updateAccountsReceivableController,
	deleteAccountsReceivableController,
};
