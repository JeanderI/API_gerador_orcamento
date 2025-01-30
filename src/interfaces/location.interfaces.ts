import { locationsRequest, locationsResponse, locationsSchema } from "schemas/location.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type Tlocations = z.infer<typeof locationsSchema>;
type TlocationsReq = z.infer<typeof locationsRequest>;
type TlocationsRes = z.infer<typeof locationsResponse>;
type TlocationsUpdate = DeepPartial<TlocationsReq>;

export { Tlocations, TlocationsReq, TlocationsRes, TlocationsUpdate };