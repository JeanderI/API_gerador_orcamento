import { AppDataSource } from "../../data-source";
import { Flavor } from "../../entities";
import { Repository } from "typeorm";

const createFlavorService = async (data: any) => {
	const flavorRepository: Repository<Flavor> = AppDataSource.getRepository(Flavor);

	const newFlavor = flavorRepository.create({
		...data,
	});

	const createdFlavor = await flavorRepository.save(newFlavor);

	return createdFlavor;
};

export { createFlavorService };
