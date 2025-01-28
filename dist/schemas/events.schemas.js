"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsResponse = exports.eventsRequest = exports.eventsSchema = void 0;
const zod_1 = require("zod");
const eventsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    duration: zod_1.z.string(),
    period: zod_1.z.string(),
    number_attendants: zod_1.z.string(),
    number_clients: zod_1.z.string(),
    type: zod_1.z.string()
});
exports.eventsSchema = eventsSchema;
const eventsRequest = eventsSchema.omit({ id: true });
exports.eventsRequest = eventsRequest;
const eventsResponse = zod_1.z.array(eventsRequest);
exports.eventsResponse = eventsResponse;
