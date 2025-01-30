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
exports.deleteCustomerService = void 0;
const data_source_1 = require("data-source");
const entities_1 = require("entities");
const AppErrors_1 = __importDefault(require("errors/AppErrors"));
const deleteCustomerService = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = data_source_1.AppDataSource.getRepository(entities_1.Customer);
    const customer = yield customerRepository.findOne({
        where: { id: customerId },
    });
    if (!customer) {
        throw new AppErrors_1.default("Customer not found", 404);
    }
    yield customerRepository.remove(customer);
    return;
});
exports.deleteCustomerService = deleteCustomerService;
