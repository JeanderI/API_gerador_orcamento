import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import AppError from "../../errors/AppErrors";

const findClientService = async (clientId: string) => {
	const clientRepository = AppDataSource.getRepository(Client);

	const client = await clientRepository.findOne({
		where: { id: clientId },
	});

	if (!client) {
		throw new AppError("Client not found", 404);
	}

	return client;
};

export { findClientService };
