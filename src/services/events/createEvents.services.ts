import { AppDataSource } from "data-source";
import { Event } from "entities";
import { Repository } from "typeorm";

const createEventService = async (data: any) => {
	const eventRepository: Repository<Event> = AppDataSource.getRepository(Event);

	const newEvent = eventRepository.create({
		...data,
	});

	const createdEvent = await eventRepository.save(newEvent);

	return createdEvent;
};

export { createEventService };
