"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimatesResponse = exports.estimatesRequest = exports.estimatesSchema = void 0;
const zod_1 = require("zod");
const estimatesSchema = zod_1.z.object({
    id: zod_1.z.string(),
    total_amount: zod_1.z.string(),
    sales_type: zod_1.z.string(),
    costumer: zod_1.z.string(),
    flavors: zod_1.z.string(),
    email: zod_1.z.string(),
    locations: zod_1.z.string(),
    events: zod_1.z.string(),
    start_date: zod_1.z.string(),
    start_time: zod_1.z.string(),
    end_date: zod_1.z.string(),
    end_time: zod_1.z.string(),
});
exports.estimatesSchema = estimatesSchema;
const estimatesRequest = estimatesSchema.omit({ id: true });
exports.estimatesRequest = estimatesRequest;
const estimatesResponse = zod_1.z.array(estimatesRequest);
exports.estimatesResponse = estimatesResponse;
