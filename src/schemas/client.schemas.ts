import { z } from "zod";

const clientsSchema = z.object({
	id: z.string(),
	cnpj: z.string(),
	name: z.string(),
	company_name: z.string(),
	state_registration: z.string(),
	email: z.string(),
	phone_number: z.string(),
	rg: z.string(),
	cpf: z.string(),
	city: z.string(),
	state: z.string(),
	address: z.string(),
	number: z.string(),
	cep: z.string(),
});

const clientsRequest = clientsSchema.omit({ id: true });

const clientsResponse = z.array(clientsRequest);

export { clientsSchema, clientsRequest, clientsResponse };
