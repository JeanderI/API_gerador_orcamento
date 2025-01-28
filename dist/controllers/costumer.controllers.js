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
exports.deleteCustomerController = exports.updateCustomerController = exports.findCustomerController = exports.listCustomerController = exports.createCustomerController = void 0;
const createCostumer_services_1 = require("../services/costumer/createCostumer.services");
const listCostumer_services_1 = require("../services/costumer/listCostumer.services");
const findCostumer_services_1 = require("../services/costumer/findCostumer.services");
const updateCostumer_services_1 = require("../services/costumer/updateCostumer.services");
const deleteCostumer_services_1 = require("../services/costumer/deleteCostumer.services");
const createCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = req.body;
    const newCustomer = yield (0, createCostumer_services_1.createCustomerService)(customerData);
    return res.status(201).json(newCustomer);
});
exports.createCustomerController = createCustomerController;
const listCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield (0, listCostumer_services_1.listCustomerService)();
    return res.status(200).json(customers);
});
exports.listCustomerController = listCustomerController;
const findCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.id;
    const customer = yield (0, findCostumer_services_1.findCustomerService)(customerId);
    return res.status(200).json(customer);
});
exports.findCustomerController = findCustomerController;
const updateCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = req.body;
    const idCustomer = req.params.id;
    const updatedCustomer = yield (0, updateCostumer_services_1.updateCustomerService)(customerData, idCustomer);
    return res.status(200).json(updatedCustomer);
});
exports.updateCustomerController = updateCustomerController;
const deleteCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteCostumer_services_1.deleteCustomerService)(req.params.id);
    return res.status(204).send();
});
exports.deleteCustomerController = deleteCustomerController;
