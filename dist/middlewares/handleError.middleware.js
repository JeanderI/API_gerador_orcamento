"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorMiddleware = void 0;
const zod_1 = require("zod");
const AppErrors_1 = __importDefault(require("../errors/AppErrors"));
const handleErrorMiddleware = (error, request, response, _) => {
    if (error instanceof AppErrors_1.default) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return response.status(400).json({
            message: error.flatten().fieldErrors,
        });
    }
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
};
exports.handleErrorMiddleware = handleErrorMiddleware;
