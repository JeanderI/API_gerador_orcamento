import { estimatesRequest, estimatesResponse, estimatesSchema } from "schemas/estimate.schemas";
import { DeepPartial } from "typeorm";
import { z } from "zod";

type Testimates = z.infer<typeof estimatesSchema>;
type TestimatesReq = z.infer<typeof estimatesRequest>;
type TestimatesRes = z.infer<typeof estimatesResponse>;
type TestimatesUpdate = DeepPartial<TestimatesReq>;

export { Testimates, TestimatesReq, TestimatesRes, TestimatesUpdate };