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
exports.deleteFlavorController = exports.updateFlavorController = exports.findFlavorController = exports.listFlavorController = exports.createFlavorController = void 0;
const createFlavor_services_1 = require("../services/flavor/createFlavor.services");
const listFlavors_services_1 = require("../services/flavor/listFlavors.services");
const findFlavor_services_1 = require("../services/flavor/findFlavor.services");
const updateFlavors_services_1 = require("../services/flavor/updateFlavors.services");
const deleteFlavor_services_1 = require("../services/flavor/deleteFlavor.services");
const createFlavorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const flavorData = req.body;
    const newFlavor = yield (0, createFlavor_services_1.createFlavorService)(flavorData);
    return res.status(201).json(newFlavor);
});
exports.createFlavorController = createFlavorController;
const listFlavorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const flavors = yield (0, listFlavors_services_1.listFlavorService)();
    return res.status(200).json(flavors);
});
exports.listFlavorController = listFlavorController;
const findFlavorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const flavorId = req.params.id;
    const flavor = yield (0, findFlavor_services_1.findFlavorService)(flavorId);
    return res.status(200).json(flavor);
});
exports.findFlavorController = findFlavorController;
const updateFlavorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const flavorData = req.body;
    const idFlavor = req.params.id;
    const updatedFlavor = yield (0, updateFlavors_services_1.updateFlavorService)(flavorData, idFlavor);
    return res.status(200).json(updatedFlavor);
});
exports.updateFlavorController = updateFlavorController;
const deleteFlavorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteFlavor_services_1.deleteFlavorService)(req.params.id);
    return res.status(204).send();
});
exports.deleteFlavorController = deleteFlavorController;
