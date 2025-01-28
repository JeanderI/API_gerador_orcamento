
import { accountPayablesRequest, accountPayablesResponse, accountPayablesSchema } from "schemas/accountspayable.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type TaccountPayables = z.infer<typeof accountPayablesSchema>;
type TaccountPayablesReq = z.infer<typeof accountPayablesRequest>;
type TaccountPayablesRes = z.infer<typeof accountPayablesResponse>;
type TaccountPayablesUpdate = DeepPartial<TaccountPayablesReq>;

export { TaccountPayables, TaccountPayablesReq, TaccountPayablesRes, TaccountPayablesUpdate };