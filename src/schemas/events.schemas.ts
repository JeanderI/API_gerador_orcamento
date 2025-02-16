import { Period, Type } from "entities/events.entities";
import { z } from "zod";

const eventsSchema = z.object({
	id: z.string(),
	duration: z.string(),
	period: z.nativeEnum(Period),
	number_attendants: z.string(),
	number_clients: z.string(),
	type: z.nativeEnum(Type),
	food_allowance: z.string(),
	cleaning_cost: z.string(),
	showcase_cost: z.string(),
	piaggio_cost: z.string(),
	hourly_rate: z.string(),
	transport_allowance: z.string(),
	total: z.string(),
});

const eventsRequest = eventsSchema.omit({ id: true });

const eventsResponse = z.array(eventsRequest);

export { eventsSchema, eventsRequest, eventsResponse };
