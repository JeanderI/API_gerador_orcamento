import { AppDataSource } from "data-source";
import { Event } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteEventService = async (eventId: string) => {
	const eventRepository: Repository<Event> = AppDataSource.getRepository(Event);

	const event: Event | null = await eventRepository.findOne({
		where: { id: eventId },
	});

	if (!event) {
		throw new AppError("Event not found", 404);
	}

	await eventRepository.remove(event);

	return;
};

export { deleteEventService };
