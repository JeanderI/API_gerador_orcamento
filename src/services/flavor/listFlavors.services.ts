import { Flavor } from "entities";
import { AppDataSource } from "../../data-source";

const listFlavorService = async () => {
	const flavorRepository = AppDataSource.getRepository(Flavor);

	const flavors = await flavorRepository.find();

	return flavors;
};

export { listFlavorService };
