import { AppDataSource } from "../../data-source";
import { Location } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const updateLocationService = async (data: any, locationId: string) => {
	const locationRepository: Repository<Location> = AppDataSource.getRepository(Location);

	const oldLocation: Location | null = await locationRepository.findOne({
		where: { id: locationId },
	});

	if (!oldLocation) {
		throw new AppError("Location not found", 404);
	}

	const locationProperties = Object.keys(oldLocation);

	locationProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldLocation as any)[property] = data[property];
		}
	});

	const updatedLocation = await locationRepository.save(oldLocation);

	return updatedLocation;
};

export { updateLocationService };
