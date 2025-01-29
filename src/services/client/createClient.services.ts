import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { Repository } from "typeorm";

const createClientService = async (data: any) => {
	const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

	const newClient = clientRepository.create({
		...data,
	});

	const createdClient = await clientRepository.save(newClient);

	return createdClient;
};

export { createClientService };
