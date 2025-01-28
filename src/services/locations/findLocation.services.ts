import { AppDataSource } from "data-source";
import { Location } from "../../entities";
import AppError from "errors/AppErrors";

const findLocationService = async (locationId: string) => {
	const locationRepository = AppDataSource.getRepository(Location);

	const location = await locationRepository.findOne({
		where: { id: locationId },
	});

	if (!location) {
		throw new AppError("Location not found", 404);
	}

	return location;
};

export { findLocationService };
