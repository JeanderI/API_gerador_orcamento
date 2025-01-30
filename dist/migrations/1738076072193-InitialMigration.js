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
exports.InitialMigration1738076072193 = void 0;
class InitialMigration1738076072193 {
    constructor() {
        this.name = 'InitialMigration1738076072193';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "flavors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" character varying NOT NULL, "name" character varying NOT NULL, "quantity" character varying NOT NULL, "estimateId" uuid, CONSTRAINT "PK_167d84f2986107e162f56a7ca79" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "costumers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpj" character varying NOT NULL, "name" character varying NOT NULL, "company_name" character varying NOT NULL, "state_registration" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, CONSTRAINT "PK_235ef3b889390c91380dbba01fb" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "events" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "duration" character varying NOT NULL, "period" character varying NOT NULL, "number_attendants" character varying NOT NULL, "number_clients" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "locations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city" character varying NOT NULL, "state" character varying NOT NULL, "address" character varying NOT NULL, "number" character varying NOT NULL, "additional_adress" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "neighborhood" character varying NOT NULL, "estimateId" uuid, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "estimates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total_amount" character varying NOT NULL, "sales_type" character varying NOT NULL, "start_date" character varying NOT NULL, "start_time" character varying NOT NULL, "end_date" character varying NOT NULL, "end_time" character varying NOT NULL, "costumerId" uuid, "locationsId" uuid, "issuerId" uuid, "eventsId" uuid, CONSTRAINT "PK_447af75b2f6025adf7f80703810" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "accountReceivable" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" character varying NOT NULL, "installments" character varying NOT NULL, "discount" character varying NOT NULL, "payment_status" character varying NOT NULL, "issuerId" uuid, CONSTRAINT "PK_f9ca10f89588a70ea8b39848d2c" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "accountPayables" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "expense_category" character varying NOT NULL, "issue_date" character varying NOT NULL, "cost" character varying NOT NULL, "payment_proof" character varying NOT NULL, "issuerId" uuid, CONSTRAINT "PK_73e721e6e375430b189715cf0be" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "issuer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpj" character varying NOT NULL, "name" character varying NOT NULL, "company_name" character varying NOT NULL, "state_registration" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_0650c5a53be3a0d22b580e27d25" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "flavors" ADD CONSTRAINT "FK_0ef677caea4bec28f242921abf1" FOREIGN KEY ("estimateId") REFERENCES "estimates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_6521943417a2a55c0eaa42664c3" FOREIGN KEY ("estimateId") REFERENCES "estimates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_eb2c4028768d1e297a4b579d8a3" FOREIGN KEY ("costumerId") REFERENCES "costumers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_95e699e08c9f87a436f57aba6b4" FOREIGN KEY ("locationsId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_e940dc77ba2c878a782c9287c0b" FOREIGN KEY ("issuerId") REFERENCES "issuer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_e4113e37025b939bcdc6f7554a4" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "accountReceivable" ADD CONSTRAINT "FK_cd149aefba05bcc5998b59f7094" FOREIGN KEY ("issuerId") REFERENCES "issuer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "accountPayables" ADD CONSTRAINT "FK_2307caa8157588caa5359217fa8" FOREIGN KEY ("issuerId") REFERENCES "issuer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "accountPayables" DROP CONSTRAINT "FK_2307caa8157588caa5359217fa8"`);
            yield queryRunner.query(`ALTER TABLE "accountReceivable" DROP CONSTRAINT "FK_cd149aefba05bcc5998b59f7094"`);
            yield queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_e4113e37025b939bcdc6f7554a4"`);
            yield queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_e940dc77ba2c878a782c9287c0b"`);
            yield queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_95e699e08c9f87a436f57aba6b4"`);
            yield queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_eb2c4028768d1e297a4b579d8a3"`);
            yield queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_6521943417a2a55c0eaa42664c3"`);
            yield queryRunner.query(`ALTER TABLE "flavors" DROP CONSTRAINT "FK_0ef677caea4bec28f242921abf1"`);
            yield queryRunner.query(`DROP TABLE "issuer"`);
            yield queryRunner.query(`DROP TABLE "accountPayables"`);
            yield queryRunner.query(`DROP TABLE "accountReceivable"`);
            yield queryRunner.query(`DROP TABLE "estimates"`);
            yield queryRunner.query(`DROP TABLE "locations"`);
            yield queryRunner.query(`DROP TABLE "events"`);
            yield queryRunner.query(`DROP TABLE "costumers"`);
            yield queryRunner.query(`DROP TABLE "flavors"`);
        });
    }
}
exports.InitialMigration1738076072193 = InitialMigration1738076072193;
