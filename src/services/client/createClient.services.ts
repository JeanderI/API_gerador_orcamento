import AppError from "../../errors/AppErrors";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { Repository } from "typeorm";
import { TclientsReq } from "interfaces/client.interfaces";

const createClientService = async (data: TclientsReq) => {
	const clientRepository: Repository<Client> =
		AppDataSource.getRepository(Client);

	if (!data.cpf) {
		throw new AppError("O campo CPF é obrigatório.", 400);
	}
	if (!data.rg) {
		throw new AppError("O campo RG é obrigatório.", 400);
	}
	if (!data.cnpj) {
		throw new AppError("O campo CNPJ é obrigatório.", 400);
	}
	if (!data.company_name) {
		throw new AppError("O campo Nome da Empresa é obrigatório.", 400);
	}

	const cnpjRegex = /^\d{14}$/;
	if (!cnpjRegex.test(data.cnpj)) {
		throw new AppError("O CNPJ fornecido não tem um formato válido.", 400);
	}

	const existingClient = await clientRepository.findOne({
		where: [
			{ cpf: data.cpf },
			{ rg: data.rg },
			{ cnpj: data.cnpj },
			{ company_name: data.company_name },
		],
	});

	if (existingClient) {
		let errorMessage = "Já existe um cliente com os seguintes dados: ";
		if (existingClient.cpf === data.cpf) errorMessage += "CPF ";
		if (existingClient.rg === data.rg) errorMessage += "RG ";
		if (existingClient.cnpj === data.cnpj) errorMessage += "CNPJ ";
		if (existingClient.company_name === data.company_name)
			errorMessage += "Nome da Empresa ";
		throw new AppError(errorMessage.trim() + ".", 400);
	}

	const newClient = clientRepository.create({ ...data });
	const createdClient = await clientRepository.save(newClient);

	return createdClient;
};

export { createClientService };
