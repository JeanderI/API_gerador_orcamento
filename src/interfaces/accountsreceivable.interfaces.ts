import { accountReceivableRequest, accountReceivableResponse, accountReceivableSchema } from "schemas/accountsreceivable.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";
import { TaccountPayablesUpdate } from "./accountspayable.interfaces";

type TaccountReceivable = z.infer<typeof accountReceivableSchema>;
type TaccountReceivableReq = z.infer<typeof accountReceivableRequest>;
type TaccountReceivableRes = z.infer<typeof accountReceivableResponse>;
type TaccountReceivableUpdate = DeepPartial<TaccountReceivableReq>;

export { TaccountReceivable, TaccountReceivableReq, TaccountReceivableRes, TaccountPayablesUpdate };