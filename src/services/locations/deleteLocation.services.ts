import { AppDataSource } from "data-source";
import { Location } from "../../entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteLocationService = async (locationId: string) => {
	const locationRepository: Repository<Location> = AppDataSource.getRepository(Location);

	const location: Location | null = await locationRepository.findOne({
		where: { id: locationId },
	});

	if (!location) {
		throw new AppError("Location not found", 404);
	}

	await locationRepository.remove(location);

	return;
};

export { deleteLocationService };
