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
exports.deleteAccountsReceivableService = void 0;
const data_source_1 = require("data-source");
const entities_1 = require("entities");
const AppErrors_1 = __importDefault(require("errors/AppErrors"));
const deleteAccountsReceivableService = (accountsReceivableId) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsReceivableRepository = data_source_1.AppDataSource.getRepository(entities_1.AccountsReceivable);
    const accountsReceivable = yield accountsReceivableRepository.findOne({
        where: { id: accountsReceivableId },
    });
    if (!accountsReceivable) {
        throw new AppErrors_1.default("AccountsReceivable not found", 404);
    }
    yield accountsReceivableRepository.remove(accountsReceivable);
    return;
});
exports.deleteAccountsReceivableService = deleteAccountsReceivableService;
