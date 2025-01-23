import { Request, Response } from "express";
import { createEstimateService } from "../services/estimate/createEstimate.services";
import { listEstimateService } from "../services/estimate/listEstimate.services";
import { findEstimateService } from "../services/estimate/findEstimate.services";
import { updateEstimateService } from "../services/estimate/updateEstimate.services";
import { deleteEstimateService } from "../services/estimate/deleteEstimate.services";

const createEstimateController = async (req: Request, res: Response) => {
	const estimateData = req.body;
	const newEstimate = await createEstimateService(estimateData);

	return res.status(201).json(newEstimate);
};

const listEstimateController = async (req: Request, res: Response) => {
	const estimates = await listEstimateService();

	return res.status(200).json(estimates);
};

const findEstimateController = async (req: Request, res: Response) => {
	const estimateId = req.params.id;
	const estimate = await findEstimateService(estimateId);

	return res.status(200).json(estimate);
};

const updateEstimateController = async (req: Request, res: Response) => {
	const estimateData = req.body;
	const idEstimate = req.params.id;
	const updatedEstimate = await updateEstimateService(estimateData, idEstimate);

	return res.status(200).json(updatedEstimate);
};

const deleteEstimateController = async (req: Request, res: Response) => {
	await deleteEstimateService(req.params.id);

	return res.status(204).send();
};

export {
	createEstimateController,
	listEstimateController,
	findEstimateController,
	updateEstimateController,
	deleteEstimateController,
};
