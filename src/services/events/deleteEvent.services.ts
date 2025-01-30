import { AppDataSource } from "../../data-source";
import { Event } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const deleteEventService = async (eventId: string) => {
	const eventRepository: Repository<Event> = AppDataSource.getRepository(Event);

	const event: Event | null = await eventRepository.findOne({
		where: { id: eventId },
	});

	if (!event) {
		throw new AppError("Event not found", 404);
	}
	try {
		// Tentando remover o cliente
		await eventRepository.remove(event);
	  } catch (error: any) { // Alterando para 'any' para acessar 'error.code' diretamente
		// Verificando se o erro possui o código de violação de chave estrangeira
		if (error?.driverError?.code === "23503") {
		  // Código de erro 23503: violação de chave estrangeira no PostgreSQL
		  throw new AppError("Event cannot be deleted because it is being used in estimates", 400);
		}
	
		// Caso não seja a violação de chave estrangeira, lançar um erro genérico
		throw new AppError("An error occurred while trying to delete the event", 500);
	  }

	return;
};

export { deleteEventService };
