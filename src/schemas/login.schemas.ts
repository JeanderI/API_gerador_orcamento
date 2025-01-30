import { z } from "zod";

const loginSchema = z.object({
	email: z.string().max(80),
	password: z.string(),
});

export { loginSchema };