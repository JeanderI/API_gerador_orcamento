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

  try {
    // Tentando remover o cliente
    await clientRepository.remove(client);
  } catch (error: any) { // Alterando para 'any' para acessar 'error.code' diretamente
    // Verificando se o erro possui o código de violação de chave estrangeira
    if (error?.driverError?.code === "23503") {
      // Código de erro 23503: violação de chave estrangeira no PostgreSQL
      throw new AppError("Client cannot be deleted because it is being used in estimates", 400);
    }

    // Caso não seja a violação de chave estrangeira, lançar um erro genérico
    throw new AppError("An error occurred while trying to delete the client", 500);
  }

  return;
};

export { deleteClientService };
