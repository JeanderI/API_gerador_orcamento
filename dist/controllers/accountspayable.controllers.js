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
exports.deleteAccountsPayableController = exports.updateAccountsPayableController = exports.findAccountsPayableController = exports.listAccountsPayableController = exports.createAccountsPayableController = void 0;
const createAccountsPayable_services_1 = require("../services/accountsPayable/createAccountsPayable.services");
const listAccountsPayable_services_1 = require("../services/accountsPayable/listAccountsPayable.services");
const findAccountPayable_services_1 = require("../services/accountsPayable/findAccountPayable.services");
const updateAccountPayable_services_1 = require("../services/accountsPayable/updateAccountPayable.services");
const deleteAccountPlayable_services_1 = require("../services/accountsPayable/deleteAccountPlayable.services");
const createAccountsPayableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsPayableData = req.body;
    const newAccountsPayable = yield (0, createAccountsPayable_services_1.createAccountsPayableService)(accountsPayableData);
    return res.status(201).json(newAccountsPayable);
});
exports.createAccountsPayableController = createAccountsPayableController;
const listAccountsPayableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsPayable = yield (0, listAccountsPayable_services_1.listAccountsPayableService)();
    return res.status(200).json(accountsPayable);
});
exports.listAccountsPayableController = listAccountsPayableController;
const findAccountsPayableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsPayableId = req.params.id;
    const accountsPayable = yield (0, findAccountPayable_services_1.findAccountsPayableService)(accountsPayableId);
    return res.status(200).json(accountsPayable);
});
exports.findAccountsPayableController = findAccountsPayableController;
const updateAccountsPayableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsPayableData = req.body;
    const idAccountsPayable = req.params.id;
    const updatedAccountsPayable = yield (0, updateAccountPayable_services_1.updateAccountsPayableService)(accountsPayableData, idAccountsPayable);
    return res.status(200).json(updatedAccountsPayable);
});
exports.updateAccountsPayableController = updateAccountsPayableController;
const deleteAccountsPayableController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteAccountPlayable_services_1.deleteAccountsPayableService)(req.params.id);
    return res.status(204).send();
});
exports.deleteAccountsPayableController = deleteAccountsPayableController;
