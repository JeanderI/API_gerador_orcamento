import { AppDataSource } from "../../data-source";
import { Location } from "../../entities";
import { Repository } from "typeorm";

const createLocationService = async (data: any) => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);

	data.total = data.transportation_costs * data.distance;

	const newLocation = locationRepository.create({
		...data,
	});

	const createdLocation = await locationRepository.save(newLocation);

	return createdLocation;
};

export { createLocationService };
