import { AppDataSource } from "../../data-source";
import { Location } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const deleteLocationService = async (locationId: string) => {
	const locationRepository: Repository<Location> = AppDataSource.getRepository(Location);

	const location: Location | null = await locationRepository.findOne({
		where: { id: locationId },
	});

	if (!location) {
		throw new AppError("Location not found", 404);
	}

	try {
		// Tentando remover o cliente
		await locationRepository.remove(location);
	  } catch (error: any) { // Alterando para 'any' para acessar 'error.code' diretamente
		// Verificando se o erro possui o código de violação de chave estrangeira
		if (error?.driverError?.code === "23503") {
		  // Código de erro 23503: violação de chave estrangeira no PostgreSQL
		  throw new AppError("Location cannot be deleted because it is being used in estimates", 400);
		}
	
		// Caso não seja a violação de chave estrangeira, lançar um erro genérico
		throw new AppError("An error occurred while trying to delete the location", 500);
	  }

	return;
};

export { deleteLocationService };
