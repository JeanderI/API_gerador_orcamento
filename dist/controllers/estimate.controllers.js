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
exports.deleteEstimateController = exports.updateEstimateController = exports.findEstimateController = exports.listEstimateController = exports.createEstimateController = void 0;
const createEstimate_services_1 = require("../services/estimate/createEstimate.services");
const listEstimate_services_1 = require("../services/estimate/listEstimate.services");
const findEstimate_services_1 = require("../services/estimate/findEstimate.services");
const updateEstimate_services_1 = require("../services/estimate/updateEstimate.services");
const deleteEstimate_services_1 = require("../services/estimate/deleteEstimate.services");
const createEstimateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estimateData = req.body;
    const newEstimate = yield (0, createEstimate_services_1.createEstimateService)(estimateData);
    return res.status(201).json(newEstimate);
});
exports.createEstimateController = createEstimateController;
const listEstimateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estimates = yield (0, listEstimate_services_1.listEstimateService)();
    return res.status(200).json(estimates);
});
exports.listEstimateController = listEstimateController;
const findEstimateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estimateId = req.params.id;
    const estimate = yield (0, findEstimate_services_1.findEstimateService)(estimateId);
    return res.status(200).json(estimate);
});
exports.findEstimateController = findEstimateController;
const updateEstimateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estimateData = req.body;
    const idEstimate = req.params.id;
    const updatedEstimate = yield (0, updateEstimate_services_1.updateEstimateService)(estimateData, idEstimate);
    return res.status(200).json(updatedEstimate);
});
exports.updateEstimateController = updateEstimateController;
const deleteEstimateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteEstimate_services_1.deleteEstimateService)(req.params.id);
    return res.status(204).send();
});
exports.deleteEstimateController = deleteEstimateController;
