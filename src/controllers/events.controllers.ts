import { Request, Response } from "express";
import { createEventService } from "../services/events/createEvents.services";
import { listEventService } from "../services/events/listEvents.services";
import { findEventService } from "../services/events/findEvent.services";
import { updateEventService } from "../services/events/updateEvents.services";
import { deleteEventService } from "../services/events/deleteEvent.services";

const createEventController = async (req: Request, res: Response) => {
	const eventData = req.body;
	const newEvent = await createEventService(eventData);

	return res.status(201).json(newEvent);
};

const listEventController = async (req: Request, res: Response) => {
	const events = await listEventService();

	return res.status(200).json(events);
};

const findEventController = async (req: Request, res: Response) => {
	const eventId = req.params.id;
	const event = await findEventService(eventId);

	return res.status(200).json(event);
};

const updateEventController = async (req: Request, res: Response) => {
	const eventData = req.body;
	const idEvent = req.params.id;
	const updatedEvent = await updateEventService(eventData, idEvent);

	return res.status(200).json(updatedEvent);
};

const deleteEventController = async (req: Request, res: Response) => {
	await deleteEventService(req.params.id);

	return res.status(204).send();
};

export {
	createEventController,
	listEventController,
	findEventController,
	updateEventController,
	deleteEventController,
};
