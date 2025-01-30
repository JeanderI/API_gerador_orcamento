import AppError from "../../errors/AppErrors";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { Repository } from "typeorm";

const createClientService = async (data: any) => {
	const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

	// Validação: Verificar se o CNPJ já existe
	const existingIssuerByCNPJ = await clientRepository.findOne({
		where: { cnpj: data.cnpj },
	  });
	  
	  if (existingIssuerByCNPJ) {
		throw new AppError("Já existe um cliente com esse CNPJ.", 400);
	  }
	
	  // Validação: Verificar se o email já existe
	  const existingIssuerByCompany_name = await clientRepository.findOne({
		where: { company_name: data.company_name },
	  });
	  
	  if (existingIssuerByCompany_name) {
		throw new AppError("Já existe um cliente com esse nome.", 400);
	  }
	
	  // Validação: Verificar se o CNPJ tem um formato válido (exemplo simples, você pode melhorar conforme necessário)
	  const cnpjRegex = /^\d{14}$/;
	  if (!cnpjRegex.test(data.cnpj)) {
		throw new AppError("O CNPJ fornecido não tem um formato válido.", 400);
	  }
	
	const newClient = clientRepository.create({
		...data,
	});

	const createdClient = await clientRepository.save(newClient);

	return createdClient;
};

export { createClientService };
