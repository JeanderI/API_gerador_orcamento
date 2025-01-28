import { Location } from "../../entities";
import { AppDataSource } from "../../data-source";

const listLocationService = async () => {
	const locationRepository = AppDataSource.getRepository(Location);

	const locations = await locationRepository.find();

	return locations;
};

export { listLocationService };
