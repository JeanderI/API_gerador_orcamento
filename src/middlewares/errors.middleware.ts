import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppErrors";

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // Erro não tratado
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export default errorHandler;
