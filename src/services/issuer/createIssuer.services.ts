import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Issuer } from "../../entities";
import { Repository } from "typeorm";

const createIssuerService = async (data: any) => {
	const issuerRepository: Repository<Issuer> = AppDataSource.getRepository(Issuer);

	const hashedPassword = await hash(data.password, 10); // Usando um salt de 10 para criptografar a senha

  // Criando o novo Issuer com a senha criptografada
	const newIssuer = issuerRepository.create({
		...data,
		password: hashedPassword, // Substituímos a senha original pela senha criptografada
	});

	const createdIssuer = await issuerRepository.save(newIssuer);

	return createdIssuer;
};

export { createIssuerService };
