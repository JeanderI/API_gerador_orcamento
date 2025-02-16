import { Period, Type } from "../../entities/events.entities";
import { AppDataSource } from "../../data-source";
import { Event } from "../../entities";
import { Repository } from "typeorm";
import AppError from "../../errors/AppErrors";

const createEventService = async (data: any) => {
	const eventRepository: Repository<Event> = AppDataSource.getRepository(Event);

	let total = 0;

	if (data.number_clients > data.number_attendants * 200) {
		throw new AppError(
			"Número de clientes excede o limite permitido para a quantidade de atendentes.",
			400
		);
	}

	if (data.period === Period.EVENING || data.period === Period.DAWN) {
		total += 50;
	}

	if (data.type === Type.PIAGGIO) {
		total += 400;
	} else if (data.type === Type.SHOWCASE) {
		total += 200;
	}

	total += 50;

	const attendantsCost =
		Number(data.number_attendants) *
		Number(data.hourly_rate) *
		Number(data.duration);

	const benefitsCost =
		Number(data.number_attendants) *
		(Number(data.food_allowance) + Number(data.transport_allowance));

	const cleaningCost = Number(data.cleaning_cost) || 0;

	total += attendantsCost + benefitsCost + cleaningCost;

	const newEvent = eventRepository.create({
		...data,
		total: total.toString(),
	});

	const createdEvent = await eventRepository.save(newEvent);

	return createdEvent;
};

export { createEventService };
