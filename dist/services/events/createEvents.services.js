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
exports.createEventService = void 0;
const data_source_1 = require("data-source");
const entities_1 = require("entities");
const createEventService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const eventRepository = data_source_1.AppDataSource.getRepository(entities_1.Event);
    const newEvent = eventRepository.create(Object.assign({}, data));
    const createdEvent = yield eventRepository.save(newEvent);
    return createdEvent;
});
exports.createEventService = createEventService;
