

import { costumersRequest, costumersResponse, costumersSchema } from "schemas/costumer.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type Tcostumers = z.infer<typeof costumersSchema>;
type TcostumersReq = z.infer<typeof costumersRequest>;
type TcostumersRes = z.infer<typeof costumersResponse>;
type TcostumersUpdate = DeepPartial<TcostumersReq>;

export { Tcostumers, TcostumersReq, TcostumersRes, TcostumersUpdate };