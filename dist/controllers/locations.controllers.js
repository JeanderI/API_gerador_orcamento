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
exports.deleteLocationController = exports.updateLocationController = exports.findLocationController = exports.listLocationController = exports.createLocationController = void 0;
const createLocation_services_1 = require("../services/locations/createLocation.services");
const listLocations_services_1 = require("../services/locations/listLocations.services");
const updateLocation_services_1 = require("../services/locations/updateLocation.services");
const deleteLocation_services_1 = require("../services/locations/deleteLocation.services");
const findLocation_services_1 = require("../services/locations/findLocation.services");
const createLocationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locationData = req.body;
    const newLocation = yield (0, createLocation_services_1.createLocationService)(locationData);
    return res.status(201).json(newLocation);
});
exports.createLocationController = createLocationController;
const listLocationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locations = yield (0, listLocations_services_1.listLocationService)();
    return res.status(200).json(locations);
});
exports.listLocationController = listLocationController;
const findLocationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locationId = req.params.id;
    const location = yield (0, findLocation_services_1.findLocationService)(locationId);
    return res.status(200).json(location);
});
exports.findLocationController = findLocationController;
const updateLocationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locationData = req.body;
    const idLocation = req.params.id;
    const updatedLocation = yield (0, updateLocation_services_1.updateLocationService)(locationData, idLocation);
    return res.status(200).json(updatedLocation);
});
exports.updateLocationController = updateLocationController;
const deleteLocationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteLocation_services_1.deleteLocationService)(req.params.id);
    return res.status(204).send();
});
exports.deleteLocationController = deleteLocationController;
