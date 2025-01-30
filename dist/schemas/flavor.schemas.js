"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flavorsResponse = exports.flavorsRequest = exports.flavorsSchema = void 0;
const zod_1 = require("zod");
const flavorsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    price: zod_1.z.string(),
    name: zod_1.z.string(),
    quantity: zod_1.z.string()
});
exports.flavorsSchema = flavorsSchema;
const flavorsRequest = flavorsSchema.omit({ id: true });
exports.flavorsRequest = flavorsRequest;
const flavorsResponse = zod_1.z.array(flavorsRequest);
exports.flavorsResponse = flavorsResponse;
