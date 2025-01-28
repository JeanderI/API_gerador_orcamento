"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationsResponse = exports.locationsRequest = exports.locationsSchema = void 0;
const zod_1 = require("zod");
const locationsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    city: zod_1.z.string(),
    state: zod_1.z.string(),
    address: zod_1.z.string(),
    number: zod_1.z.string(),
    additional_adress: zod_1.z.string(),
    phone_number: zod_1.z.string(),
    email: zod_1.z.string(),
    neighborhood: zod_1.z.string(),
});
exports.locationsSchema = locationsSchema;
const locationsRequest = locationsSchema.omit({ id: true });
exports.locationsRequest = locationsRequest;
const locationsResponse = zod_1.z.array(locationsRequest);
exports.locationsResponse = locationsResponse;
