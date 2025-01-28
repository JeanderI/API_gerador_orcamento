import { issuerRequest, issuerResponse, issuerSchema } from "schemas/issuer.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type Tissuer = z.infer<typeof issuerSchema>;
type TissuerReq = z.infer<typeof issuerRequest>;
type TissuerRes = z.infer<typeof issuerResponse>;
type TissuerUpdate = DeepPartial<TissuerReq>;

export { Tissuer, TissuerReq, TissuerRes, TissuerUpdate };