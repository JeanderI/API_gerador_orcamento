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
exports.AccountReceivable = void 0;
const typeorm_1 = require("typeorm");
const issuer_entities_1 = require("./issuer.entities"); // Importe a entidade Issuer
let AccountReceivable = class AccountReceivable {
};
exports.AccountReceivable = AccountReceivable;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], AccountReceivable.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountReceivable.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountReceivable.prototype, "installments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountReceivable.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountReceivable.prototype, "payment_status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => issuer_entities_1.Issuer, issuer => issuer.accountReceivables),
    __metadata("design:type", issuer_entities_1.Issuer)
], AccountReceivable.prototype, "issuer", void 0);
exports.AccountReceivable = AccountReceivable = __decorate([
    (0, typeorm_1.Entity)("accountReceivable")
], AccountReceivable);
