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
exports.updateLocationService = void 0;
const data_source_1 = require("data-source");
const entities_1 = require("entities");
const AppErrors_1 = __importDefault(require("errors/AppErrors"));
const updateLocationService = (data, locationId) => __awaiter(void 0, void 0, void 0, function* () {
    const locationRepository = data_source_1.AppDataSource.getRepository(entities_1.Location);
    const oldLocation = yield locationRepository.findOne({
        where: { id: locationId },
    });
    if (!oldLocation) {
        throw new AppErrors_1.default("Location not found", 404);
    }
    const locationProperties = Object.keys(oldLocation);
    locationProperties.forEach((property) => {
        if (data[property] !== undefined) {
            oldLocation[property] = data[property];
        }
    });
    const updatedLocation = yield locationRepository.save(oldLocation);
    return updatedLocation;
});
exports.updateLocationService = updateLocationService;
