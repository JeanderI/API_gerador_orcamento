import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const updateClientService = async (data: any, clientId: string) => {
	const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

	const oldClient: Client | null = await clientRepository.findOne({
		where: { id: clientId },
	});

	if (!oldClient) {
		throw new AppError("Client not found", 404);
	}

	const clientProperties = Object.keys(oldClient);

	clientProperties.forEach((property) => {
		if (data[property] !== undefined) {
			(oldClient as any)[property] = data[property];
		}
	});

	const updatedClient = await clientRepository.save(oldClient);

	return updatedClient;
};

export { updateClientService };
