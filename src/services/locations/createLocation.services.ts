import { AppDataSource } from "data-source";
import { Repository } from "typeorm";

const createLocationService = async (data: any) => {
	const locationRepository: Repository<Location> = AppDataSource.getRepository(Location);

	const newLocation = locationRepository.create({
		...data,
	});

	const createdLocation = await locationRepository.save(newLocation);

	return createdLocation;
};

export { createLocationService };
