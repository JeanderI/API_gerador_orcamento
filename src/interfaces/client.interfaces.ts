import {
	clientsRequest,
	clientsResponse,
	clientsSchema,
} from "schemas/client.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type Tclients = z.infer<typeof clientsSchema>;
type TclientsReq = z.infer<typeof clientsRequest>;
type TclientsRes = z.infer<typeof clientsResponse>;
type TclientsUpdate = DeepPartial<TclientsReq>;

export { Tclients, TclientsReq, TclientsRes, TclientsUpdate };
