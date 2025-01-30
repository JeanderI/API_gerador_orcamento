import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Issuer } from "../../entities/index";
import { TLoginRequest } from "../../interfaces/login.interfaces";

const createTokenService = async ({
	email,
	password,
}: TLoginRequest): Promise<string> => {
	const issuerRepository = AppDataSource.getRepository(Issuer);
	
	const issuer = await issuerRepository.findOne({
		where: {
			email,
		},
	});

	if (!issuer) {
		throw new AppError("Invalid credentials", 403);
	}

	const passwordMatch = await compare(password, issuer.password);
	
	if (!passwordMatch) {
		throw new AppError("Invalid credentials", 403);
	}

	const token = jwt.sign(
		{ id: issuer.id, email: issuer.email, name: issuer.name },
		process.env.SECRET_KEY!,
		{
		  expiresIn: "24h",
		  subject: issuer.id,
		}
	  );
	return token;
};

export { createTokenService };