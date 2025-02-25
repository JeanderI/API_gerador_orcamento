"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIssuerService = void 0;
const data_source_1 = require("data-source");
const entities_1 = require("entities");
const AppErrors_1 = __importDefault(require("errors/AppErrors"));
const updateIssuerService = (data, issuerId) => __awaiter(void 0, void 0, void 0, function* () {
    const issuerRepository = data_source_1.AppDataSource.getRepository(entities_1.Issuer);
    const oldIssuer = yield issuerRepository.findOne({
        where: { id: issuerId },
    });
    if (!oldIssuer) {
        throw new AppErrors_1.default("Issuer not found", 404);
    }
    const issuerProperties = Object.keys(oldIssuer);
    issuerProperties.forEach((property) => {
        if (data[property] !== undefined) {
            oldIssuer[property] = data[property];
        }
    });
    const updatedIssuer = yield issuerRepository.save(oldIssuer);
    return updatedIssuer;
});
exports.updateIssuerService = updateIssuerService;
