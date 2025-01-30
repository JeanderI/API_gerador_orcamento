import { Request, Response } from "express";
import { createIssuerService } from "../services/issuer/createIssuer.services";
import { listIssuerService } from "../services/issuer/listIssuers.services";
import { findIssuerService } from "../services/issuer/findIssuer.services";
import { updateIssuerService } from "../services/issuer/updateIssuer.services";
import { deleteIssuerService } from "../services/issuer/deleteIssuer.services";

const createIssuerController = async (req: Request, res: Response) => {
	const issuerData = req.body;
	const newIssuer = await createIssuerService(issuerData);

	return res.status(201).json(newIssuer);
};

const listIssuerController = async (req: Request, res: Response) => {
	const issuers = await listIssuerService();

	return res.status(200).json(issuers);
};

const findIssuerController = async (req: Request, res: Response) => {
	const issuerId = req.params.id;
	const issuer = await findIssuerService(issuerId);

	return res.status(200).json(issuer);
};

const updateIssuerController = async (req: Request, res: Response) => {
	const issuerData = req.body;
	const idIssuer = req.params.id;
	const updatedIssuer = await updateIssuerService(issuerData, idIssuer);

	return res.status(200).json(updatedIssuer);
};

const deleteIssuerController = async (req: Request, res: Response) => {
	await deleteIssuerService(req.params.id);

	return res.status(204).send();
};

export {
	createIssuerController,
	listIssuerController,
	findIssuerController,
	updateIssuerController,
	deleteIssuerController,
};
