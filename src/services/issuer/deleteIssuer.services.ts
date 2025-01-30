import { AppDataSource } from "../../data-source";
import { Issuer } from "../../entities";
import AppError from "../../errors/AppErrors";
import { Repository } from "typeorm";

const deleteIssuerService = async (issuerId: string) => {
	const issuerRepository: Repository<Issuer> = AppDataSource.getRepository(Issuer);

	const issuer: Issuer | null = await issuerRepository.findOne({
		where: { id: issuerId },
	});

	if (!issuer) {
		throw new AppError("Issuer not found", 404);
	}

	try {
		// Tentando remover o cliente
		await issuerRepository.remove(issuer);
	  } catch (error: any) { // Alterando para 'any' para acessar 'error.code' diretamente
		// Verificando se o erro possui o código de violação de chave estrangeira
		if (error?.driverError?.code === "23503") {
		  // Código de erro 23503: violação de chave estrangeira no PostgreSQL
		  throw new AppError("Issuer cannot be deleted because it is being used in estimates", 400);
		}
	
		// Caso não seja a violação de chave estrangeira, lançar um erro genérico
		throw new AppError("An error occurred while trying to delete the issuer", 500);
	  }

	

	return;
};

export { deleteIssuerService };
