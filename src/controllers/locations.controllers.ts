import { Request, Response } from "express";
import { createLocationService } from "../services/locations/createLocation.services";
import { listLocationService } from "../services/locations/listLocations.services";
import { updateLocationService } from "../services/locations/updateLocation.services";
import { deleteLocationService } from "../services/locations/deleteLocation.services";
import { findLocationService } from "../services/locations/findLocation.services";

const createLocationController = async (req: Request, res: Response) => {
	const locationData = req.body;
	const newLocation = await createLocationService(locationData);

	return res.status(201).json(newLocation);
};

const listLocationController = async (req: Request, res: Response) => {
	const locations = await listLocationService();

	return res.status(200).json(locations);
};

const findLocationController = async (req: Request, res: Response) => {
	const locationId = req.params.id;
	const location = await findLocationService(locationId);

	return res.status(200).json(location);
};

const updateLocationController = async (req: Request, res: Response) => {
	const locationData = req.body;
	const idLocation = req.params.id;
	const updatedLocation = await updateLocationService(locationData, idLocation);

	return res.status(200).json(updatedLocation);
};

const deleteLocationController = async (req: Request, res: Response) => {
	await deleteLocationService(req.params.id);

	return res.status(204).send();
};

export {
	createLocationController,
	listLocationController,
	findLocationController,
	updateLocationController,
	deleteLocationController,
};
