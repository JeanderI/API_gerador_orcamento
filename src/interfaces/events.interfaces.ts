import { eventsRequest, eventsResponse, eventsSchema } from "schemas/events.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type Tevents = z.infer<typeof eventsSchema>;
type TeventsReq = z.infer<typeof eventsRequest>;
type TeventsRes = z.infer<typeof eventsResponse>;
type TeventsUpdate = DeepPartial<TeventsReq>;

export { Tevents, TeventsReq, TeventsRes, TeventsUpdate };