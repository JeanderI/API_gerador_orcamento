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
exports.deleteIssuerController = exports.updateIssuerController = exports.findIssuerController = exports.listIssuerController = exports.createIssuerController = void 0;
const createIssuer_services_1 = require("../services/issuer/createIssuer.services");
const listIssuers_services_1 = require("../services/issuer/listIssuers.services");
const findIssuer_services_1 = require("../services/issuer/findIssuer.services");
const updateIssuer_services_1 = require("../services/issuer/updateIssuer.services");
const deleteIssuer_services_1 = require("../services/issuer/deleteIssuer.services");
const createIssuerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const issuerData = req.body;
    const newIssuer = yield (0, createIssuer_services_1.createIssuerService)(issuerData);
    return res.status(201).json(newIssuer);
});
exports.createIssuerController = createIssuerController;
const listIssuerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const issuers = yield (0, listIssuers_services_1.listIssuerService)();
    return res.status(200).json(issuers);
});
exports.listIssuerController = listIssuerController;
const findIssuerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const issuerId = req.params.id;
    const issuer = yield (0, findIssuer_services_1.findIssuerService)(issuerId);
    return res.status(200).json(issuer);
});
exports.findIssuerController = findIssuerController;
const updateIssuerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const issuerData = req.body;
    const idIssuer = req.params.id;
    const updatedIssuer = yield (0, updateIssuer_services_1.updateIssuerService)(issuerData, idIssuer);
    return res.status(200).json(updatedIssuer);
});
exports.updateIssuerController = updateIssuerController;
const deleteIssuerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteIssuer_services_1.deleteIssuerService)(req.params.id);
    return res.status(204).send();
});
exports.deleteIssuerController = deleteIssuerController;
