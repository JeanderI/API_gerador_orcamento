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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccountsReceivableController = exports.updateAccountsReceivableController = exports.findAccountsReceivableController = exports.listAccountsReceivableController = exports.createAccountsReceivableController = void 0;
const createAccountReceivable_services_1 = require("../services/accountsReceivable/createAccountReceivable.services");
const listAccountsReceivable_services_1 = require("../services/accountsReceivable/listAccountsReceivable.services");
const findAccountReceivable_services_1 = require("../services/accountsReceivable/findAccountReceivable.services");
const updateAccountReceivable_services_1 = require("../services/accountsReceivable/updateAccountReceivable.services");
const deleteAccountReceivable_services_1 = require("../services/accountsReceivable/deleteAccountReceivable.services");
const createAccountsReceivableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsReceivableData = req.body;
    const newAccountsReceivable = yield (0, createAccountReceivable_services_1.createAccountsReceivableService)(accountsReceivableData);
    return res.status(201).json(newAccountsReceivable);
});
exports.createAccountsReceivableController = createAccountsReceivableController;
const listAccountsReceivableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsReceivable = yield (0, listAccountsReceivable_services_1.listAccountsReceivableService)();
    return res.status(200).json(accountsReceivable);
});
exports.listAccountsReceivableController = listAccountsReceivableController;
const findAccountsReceivableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsReceivableId = req.params.id;
    const accountsReceivable = yield (0, findAccountReceivable_services_1.findAccountsReceivableService)(accountsReceivableId);
    return res.status(200).json(accountsReceivable);
});
exports.findAccountsReceivableController = findAccountsReceivableController;
const updateAccountsReceivableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsReceivableData = req.body;
    const idAccountsReceivable = req.params.id;
    const updatedAccountsReceivable = yield (0, updateAccountReceivable_services_1.updateAccountsReceivableService)(accountsReceivableData, idAccountsReceivable);
    return res.status(200).json(updatedAccountsReceivable);
});
exports.updateAccountsReceivableController = updateAccountsReceivableController;
const deleteAccountsReceivableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteAccountReceivable_services_1.deleteAccountsReceivableService)(req.params.id);
    return res.status(204).send();
});
exports.deleteAccountsReceivableController = deleteAccountsReceivableController;
