"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costumersResponse = exports.costumersRequest = exports.costumersSchema = void 0;
const zod_1 = require("zod");
const costumersSchema = zod_1.z.object({
    id: zod_1.z.string(),
    cnpj: zod_1.z.string(),
    name: zod_1.z.string(),
    company_name: zod_1.z.string(),
    state_registration: zod_1.z.string(),
    email: zod_1.z.string(),
    phone_number: zod_1.z.string()
});
exports.costumersSchema = costumersSchema;
const costumersRequest = costumersSchema.omit({ id: true });
exports.costumersRequest = costumersRequest;
const costumersResponse = zod_1.z.array(costumersRequest);
exports.costumersResponse = costumersResponse;
