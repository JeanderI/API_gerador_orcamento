import { AppDataSource } from "data-source";
import { Flavor } from "entities";
import AppError from "errors/AppErrors";

const findFlavorService = async (flavorId: string) => {
	const flavorRepository = AppDataSource.getRepository(Flavor);

	const flavor = await flavorRepository.findOne({
		where: { id: flavorId },
	});

	if (!flavor) {
		throw new AppError("Flavor not found", 404);
	}

	return flavor;
};

export { findFlavorService };
