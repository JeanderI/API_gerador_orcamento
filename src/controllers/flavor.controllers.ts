import { Request, Response } from "express";
import { createFlavorService } from "../services/flavor/createFlavor.services";
import { listFlavorService } from "../services/flavor/listFlavors.services";
import { findFlavorService } from "../services/flavor/findFlavor.services";
import { updateFlavorService } from "../services/flavor/updateFlavors.services";
import { deleteFlavorService } from "../services/flavor/deleteFlavor.services";

const createFlavorController = async (req: Request, res: Response) => {
	const flavorData = req.body;
	const newFlavor = await createFlavorService(flavorData);

	return res.status(201).json(newFlavor);
};

const listFlavorController = async (req: Request, res: Response) => {
	const flavors = await listFlavorService();

	return res.status(200).json(flavors);
};

const findFlavorController = async (req: Request, res: Response) => {
	const flavorId = req.params.id;
	const flavor = await findFlavorService(flavorId);

	return res.status(200).json(flavor);
};

const updateFlavorController = async (req: Request, res: Response) => {
	const flavorData = req.body;
	const idFlavor = req.params.id;
	const updatedFlavor = await updateFlavorService(flavorData, idFlavor);

	return res.status(200).json(updatedFlavor);
};

const deleteFlavorController = async (req: Request, res: Response) => {
	await deleteFlavorService(req.params.id);

	return res.status(204).send();
};

export {
	createFlavorController,
	listFlavorController,
	findFlavorController,
	updateFlavorController,
	deleteFlavorController,
};
