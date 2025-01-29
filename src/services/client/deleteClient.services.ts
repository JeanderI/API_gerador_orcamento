import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const deleteClientService = async (clientId: string) => {
	const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

	const client: Client | null = await clientRepository.findOne({
		where: { id: clientId },
	});

	if (!client) {
		throw new AppError("Client not found", 404);
	}

	await clientRepository.remove(client);

	return;
};

export { deleteClientService };
