import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Issuer } from "../../entities";
import { Repository } from "typeorm";
import AppError from "../../errors/AppErrors"; // Importando o erro personalizado

const createIssuerService = async (data: any) => {
  const issuerRepository: Repository<Issuer> = AppDataSource.getRepository(Issuer);

  // Validação: Verificar se o CNPJ já existe
  const existingIssuerByCNPJ = await issuerRepository.findOne({
    where: { cnpj: data.cnpj },
  });
  
  if (existingIssuerByCNPJ) {
    throw new AppError("Já existe um emissor com esse CNPJ.", 400);
  }

  // Validação: Verificar se o email já existe
  const existingIssuerByEmail = await issuerRepository.findOne({
    where: { email: data.email },
  });
  
  if (existingIssuerByEmail) {
    throw new AppError("Já existe um emissor com esse email.", 400);
  }

  // Validação: Verificar se todos os campos obrigatórios estão presentes
  if (!data.cnpj || !data.name || !data.company_name || !data.email || !data.password) {
    throw new AppError("Todos os campos obrigatórios precisam ser preenchidos.", 400);
  }

  // Validação: Verificar se o email tem um formato válido
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(data.email)) {
    throw new AppError("O email fornecido não tem um formato válido.", 400);
  }

  // Validação: Verificar se o CNPJ tem um formato válido (exemplo simples, você pode melhorar conforme necessário)
  const cnpjRegex = /^\d{14}$/;
  if (!cnpjRegex.test(data.cnpj)) {
    throw new AppError("O CNPJ fornecido não tem um formato válido.", 400);
  }

  // Criptografando a senha
  const hashedPassword = await hash(data.password, 10); 

  // Criando o novo emissor
  const newIssuer = issuerRepository.create({
    ...data,
    password: hashedPassword, 
  });

  // Salvando no banco
  const createdIssuer = await issuerRepository.save(newIssuer);

  return createdIssuer;
};

export { createIssuerService };
