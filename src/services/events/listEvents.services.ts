import { Event } from "../../entities";
import { AppDataSource } from "../../data-source";

const listEventService = async () => {
	const eventRepository = AppDataSource.getRepository(Event);

	const events = await eventRepository.find();

	return events;
};

export { listEventService };
