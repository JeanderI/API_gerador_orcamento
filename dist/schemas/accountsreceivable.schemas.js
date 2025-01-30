"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountReceivableResponse = exports.accountReceivableRequest = exports.accountReceivableSchema = void 0;
const zod_1 = require("zod");
const accountReceivableSchema = zod_1.z.object({
    id: zod_1.z.string(),
    expense_category: zod_1.z.string(),
    issue_date: zod_1.z.string(),
    cost: zod_1.z.string(),
    payment_proof: zod_1.z.string()
});
exports.accountReceivableSchema = accountReceivableSchema;
const accountReceivableRequest = accountReceivableSchema.omit({ id: true });
exports.accountReceivableRequest = accountReceivableRequest;
const accountReceivableResponse = zod_1.z.array(accountReceivableRequest);
exports.accountReceivableResponse = accountReceivableResponse;
