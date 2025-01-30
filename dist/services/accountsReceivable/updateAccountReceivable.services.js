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
exports.updateAccountsReceivableService = void 0;
const data_source_1 = require("data-source");
const entities_1 = require("entities");
const AppErrors_1 = __importDefault(require("errors/AppErrors"));
const updateAccountsReceivableService = (data, accountsReceivableId) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsReceivableRepository = data_source_1.AppDataSource.getRepository(entities_1.AccountsReceivable);
    const oldAccountsReceivable = yield accountsReceivableRepository.findOne({
        where: { id: accountsReceivableId },
    });
    if (!oldAccountsReceivable) {
        throw new AppErrors_1.default("AccountsReceivable not found", 404);
    }
    const accountsReceivableProperties = Object.keys(oldAccountsReceivable);
    accountsReceivableProperties.forEach((property) => {
        if (data[property] !== undefined) {
            oldAccountsReceivable[property] = data[property];
        }
    });
    const updatedAccountsReceivable = yield accountsReceivableRepository.save(oldAccountsReceivable);
    return updatedAccountsReceivable;
});
exports.updateAccountsReceivableService = updateAccountsReceivableService;
