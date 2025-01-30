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
exports.deleteEventController = exports.updateEventController = exports.findEventController = exports.listEventController = exports.createEventController = void 0;
const createEvents_services_1 = require("../services/events/createEvents.services");
const listEvents_services_1 = require("../services/events/listEvents.services");
const findEvent_services_1 = require("../services/events/findEvent.services");
const updateEvents_services_1 = require("../services/events/updateEvents.services");
const deleteEvent_services_1 = require("../services/events/deleteEvent.services");
const createEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventData = req.body;
    const newEvent = yield (0, createEvents_services_1.createEventService)(eventData);
    return res.status(201).json(newEvent);
});
exports.createEventController = createEventController;
const listEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield (0, listEvents_services_1.listEventService)();
    return res.status(200).json(events);
});
exports.listEventController = listEventController;
const findEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.id;
    const event = yield (0, findEvent_services_1.findEventService)(eventId);
    return res.status(200).json(event);
});
exports.findEventController = findEventController;
const updateEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventData = req.body;
    const idEvent = req.params.id;
    const updatedEvent = yield (0, updateEvents_services_1.updateEventService)(eventData, idEvent);
    return res.status(200).json(updatedEvent);
});
exports.updateEventController = updateEventController;
const deleteEventController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteEvent_services_1.deleteEventService)(req.params.id);
    return res.status(204).send();
});
exports.deleteEventController = deleteEventController;
