import { AppDataSource } from "data-source";
import { Flavor } from "entities";
import AppError from "errors/AppErrors";
import { Repository } from "typeorm";

const deleteFlavorService = async (flavorId: string) => {
	const flavorRepository: Repository<Flavor> = AppDataSource.getRepository(Flavor);

	const flavor: Flavor | null = await flavorRepository.findOne({
		where: { id: flavorId },
	});

	if (!flavor) {
		throw new AppError("Flavor not found", 404);
	}

	await flavorRepository.remove(flavor);

	return;
};

export { deleteFlavorService };
