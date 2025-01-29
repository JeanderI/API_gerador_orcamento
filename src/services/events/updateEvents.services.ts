import { AppDataSource } from "../../data-source";
import { Event } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const updateEventService = async (data: any, eventId: string) => {
	const eventRepository: Repository<Event> = AppDataSource.getRepository(Event);

	const oldEvent: Event | null = await eventRepository.findOne({
		where: { id: eventId },
	});

	if (!oldEvent) {
		throw new AppError("Event not found", 404);
	}

	const eventProperties = Object.keys(oldEvent);

	eventProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldEvent as any)[property] = data[property];
		}
	});

	const updatedEvent = await eventRepository.save(oldEvent);

	return updatedEvent;
};

export { updateEventService };
