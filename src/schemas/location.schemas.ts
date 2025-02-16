import { z } from "zod";

const locationsSchema = z.object({
	id: z.string(),
	city: z.string(),
	state: z.string(),
	address: z.string(),
	number: z.string(),
	additional_adress: z.string(),
	transportation_costs: z.string(),
	distance: z.string(),
	phone_number: z.string(),
	email: z.string(),
	neighborhood: z.string(),
	total: z.string(),
});

const locationsRequest = locationsSchema.omit({ id: true });

const locationsResponse = z.array(locationsRequest);

export { locationsSchema, locationsRequest, locationsResponse };
