import { AppDataSource } from "../../data-source";
import { Flavor } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const updateFlavorService = async (data: any, flavorId: string) => {
	const flavorRepository: Repository<Flavor> = AppDataSource.getRepository(Flavor);

	const oldFlavor: Flavor | null = await flavorRepository.findOne({
		where: { id: flavorId },
	});

	if (!oldFlavor) {
		throw new AppError("Flavor not found", 404);
	}

	const flavorProperties = Object.keys(oldFlavor);

	flavorProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldFlavor as any)[property] = data[property];
		}
	});

	const updatedFlavor = await flavorRepository.save(oldFlavor);

	return updatedFlavor;
};

export { updateFlavorService };
