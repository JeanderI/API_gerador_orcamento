"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issuer = void 0;
const typeorm_1 = require("typeorm");
const estimate_entities_1 = require("./estimate.entities"); // Importe a entidade Estimate
const accountsreceivable_entities_1 = require("./accountsreceivable.entities");
const accountspayable_entities_1 = require("./accountspayable.entities");
let Issuer = class Issuer {
};
exports.Issuer = Issuer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Issuer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issuer.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issuer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issuer.prototype, "company_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issuer.prototype, "state_registration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issuer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issuer.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issuer.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => estimate_entities_1.Estimate, estimate => estimate.issuer),
    __metadata("design:type", Array)
], Issuer.prototype, "estimates", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => accountsreceivable_entities_1.AccountReceivable, accountReceivable => accountReceivable.issuer),
    __metadata("design:type", Array)
], Issuer.prototype, "accountReceivables", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => accountspayable_entities_1.AccountPayable, accountPayable => accountPayable.issuer),
    __metadata("design:type", Array)
], Issuer.prototype, "accountPayables", void 0);
exports.Issuer = Issuer = __decorate([
    (0, typeorm_1.Entity)("issuer")
], Issuer);
