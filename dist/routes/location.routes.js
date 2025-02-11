"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationRoutes = void 0;
const locations_controllers_1 = require("controllers/locations.controllers");
const express_1 = require("express");
const locationRoutes = (0, express_1.Router)();
exports.locationRoutes = locationRoutes;
locationRoutes.post("", locations_controllers_1.createLocationController);
locationRoutes.get("", locations_controllers_1.listLocationController);
locationRoutes.get("/:id", locations_controllers_1.findLocationController);
locationRoutes.patch("/:id", locations_controllers_1.updateLocationController);
locationRoutes.delete("/:id", locations_controllers_1.deleteLocationController);
