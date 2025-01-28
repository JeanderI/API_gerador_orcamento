import { flavorsRequest, flavorsResponse, flavorsSchema } from "schemas/flavor.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type Tflavors = z.infer<typeof flavorsSchema>;
type TflavorsReq = z.infer<typeof flavorsRequest>;
type TflavorsRes = z.infer<typeof flavorsResponse>;
type TflavorsUpdate = DeepPartial<TflavorsReq>;

export { Tflavors, TflavorsReq, TflavorsRes, TflavorsUpdate };