"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountPayablesResponse = exports.accountPayablesRequest = exports.accountPayablesSchema = void 0;
const zod_1 = require("zod");
const accountPayablesSchema = zod_1.z.object({
    id: zod_1.z.string(),
    expense_category: zod_1.z.string(),
    issue_date: zod_1.z.string(),
    cost: zod_1.z.string(),
    payment_proof: zod_1.z.string()
});
exports.accountPayablesSchema = accountPayablesSchema;
const accountPayablesRequest = accountPayablesSchema.omit({ id: true });
exports.accountPayablesRequest = accountPayablesRequest;
const accountPayablesResponse = zod_1.z.array(accountPayablesRequest);
exports.accountPayablesResponse = accountPayablesResponse;
