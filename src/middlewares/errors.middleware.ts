import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppErrors";

const errorHandler = (
  err: any, // Altere para 'any' para evitar o erro de tipagem
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Verifica se o erro é uma instância do AppError
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // Trata erros de violação de chave única (erro do banco)
  if (err.code === "23505") { // Verifique se a propriedade 'code' está presente
    const fieldName = err.detail.match(/\(([^)]+)\)/)[1]; // Extrai o nome do campo da chave única
    return res.status(400).json({
      status: "error",
      message: `O valor do campo "${fieldName}" já existe. Tente outro valor.`,
    });
  }

  // Erro genérico para outros casos não tratados
  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
  });
};

export default errorHandler;
