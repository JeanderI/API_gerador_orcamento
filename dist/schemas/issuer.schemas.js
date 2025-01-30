"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuerResponse = exports.issuerRequest = exports.issuerSchema = void 0;
const zod_1 = require("zod");
const issuerSchema = zod_1.z.object({
    id: zod_1.z.string(),
    cnpj: zod_1.z.string(),
    name: zod_1.z.string(),
    company_name: zod_1.z.string(),
    state_registration: zod_1.z.string(),
    email: zod_1.z.string(),
    phone_number: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.issuerSchema = issuerSchema;
const issuerRequest = issuerSchema.omit({ id: true });
exports.issuerRequest = issuerRequest;
const issuerResponse = zod_1.z.array(issuerRequest);
exports.issuerResponse = issuerResponse;
