import { Request, Response } from "express";
import { createClientService } from "../services/client/createClient.services";
import { listClientService } from "../services/client/listClient.services";
import { findClientService } from "../services/client/findClient.services";
import { updateClientService } from "../services/client/updateClient.services";
import { deleteClientService } from "../services/client/deleteClient.services";

const createClientController = async (req: Request, res: Response) => {
	const clientData = req.body;
	const newClient = await createClientService(clientData);

	return res.status(201).json(newClient);
};

const listClientController = async (req: Request, res: Response) => {
	const clients = await listClientService();

	return res.status(200).json(clients);
};

const findClientController = async (req: Request, res: Response) => {
	const clientId = req.params.id;
	const client = await findClientService(clientId);

	return res.status(200).json(client);
};

const updateClientController = async (req: Request, res: Response) => {
	const clientData = req.body;
	const idClient = req.params.id;
	const updatedClient = await updateClientService(clientData, idClient);

	return res.status(200).json(updatedClient);
};

const deleteClientController = async (req: Request, res: Response) => {
	await deleteClientService(req.params.id);

	return res.status(204).send();
};

export {
	createClientController,
	listClientController,
	findClientController,
	updateClientController,
	deleteClientController,
};
