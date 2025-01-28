import { AppDataSource } from "data-source";
import { Event } from "../../entities";
import AppError from "errors/AppErrors";

const findEventService = async (eventId: string) => {
	const eventRepository = AppDataSource.getRepository(Event);

	const event = await eventRepository.findOne({
		where: { id: eventId },
	});

	if (!event) {
		throw new AppError("Event not found", 404);
	}

	return event;
};

export { findEventService };
