import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";

const listClientService = async () => {
	const clientRepository = AppDataSource.getRepository(Client);

	const clients = await clientRepository.find();

	return clients;
};

export { listClientService };
