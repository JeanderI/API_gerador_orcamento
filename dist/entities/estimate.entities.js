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
exports.Estimate = void 0;
const typeorm_1 = require("typeorm");
const issuer_entities_1 = require("./issuer.entities");
const flavor_entities_1 = require("./flavor.entities");
const costumer_entities_1 = require("./costumer.entities");
const events_entities_1 = require("./events.entities");
const locations_entities_1 = require("./locations.entities");
let Estimate = class Estimate {
};
exports.Estimate = Estimate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Estimate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estimate.prototype, "total_amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estimate.prototype, "sales_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => costumer_entities_1.Costumer),
    __metadata("design:type", costumer_entities_1.Costumer)
], Estimate.prototype, "costumer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => flavor_entities_1.Flavor, flavor => flavor.estimate),
    __metadata("design:type", Array)
], Estimate.prototype, "flavors", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => locations_entities_1.Location),
    __metadata("design:type", locations_entities_1.Location)
], Estimate.prototype, "locations", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => issuer_entities_1.Issuer, issuer => issuer.estimates),
    __metadata("design:type", issuer_entities_1.Issuer)
], Estimate.prototype, "issuer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => events_entities_1.Event),
    __metadata("design:type", events_entities_1.Event)
], Estimate.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estimate.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estimate.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estimate.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estimate.prototype, "end_time", void 0);
exports.Estimate = Estimate = __decorate([
    (0, typeorm_1.Entity)("estimates")
], Estimate);
