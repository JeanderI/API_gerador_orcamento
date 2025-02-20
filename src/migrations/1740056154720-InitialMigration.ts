import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1740056154720 implements MigrationInterface {
    name = 'InitialMigration1740056154720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city" character varying NOT NULL, "state" character varying NOT NULL, "address" character varying NOT NULL, "number" character varying NOT NULL, "cep" character varying NOT NULL, "cnpj" character varying, "cpf" character varying NOT NULL, "rg" character varying NOT NULL, "name" character varying NOT NULL, "company_name" character varying NOT NULL, "state_registration" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, CONSTRAINT "UQ_c2528f5ea78df3e939950b861c0" UNIQUE ("cnpj"), CONSTRAINT "UQ_4245ac34add1ceeb505efc98777" UNIQUE ("cpf"), CONSTRAINT "UQ_ba7b47bb2100dbcafd2224fd110" UNIQUE ("rg"), CONSTRAINT "UQ_99ba9f1605b7b03bfaf8e6badfa" UNIQUE ("company_name"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accountReceivable" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" character varying NOT NULL, "installments" character varying NOT NULL, "discount" character varying NOT NULL, "payment_status" character varying NOT NULL, "issuerId" uuid, "clientId" uuid, CONSTRAINT "PK_f9ca10f89588a70ea8b39848d2c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accountPayables" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "expense_category" character varying NOT NULL, "issue_date" character varying NOT NULL, "cost" character varying NOT NULL, "payment_proof" character varying NOT NULL, "issuerId" uuid, CONSTRAINT "PK_73e721e6e375430b189715cf0be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "issuer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city" character varying NOT NULL, "state" character varying NOT NULL, "address" character varying NOT NULL, "number" character varying NOT NULL, "cep" character varying NOT NULL, "cnpj" character varying NOT NULL, "name" character varying NOT NULL, "company_name" character varying NOT NULL, "state_registration" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_8b52bd0f8726bc6e03095f1428e" UNIQUE ("cnpj"), CONSTRAINT "PK_0650c5a53be3a0d22b580e27d25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "flavors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" character varying NOT NULL, "name" character varying NOT NULL, "quantity" character varying NOT NULL, "total" character varying NOT NULL, CONSTRAINT "PK_167d84f2986107e162f56a7ca79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."events_period_enum" AS ENUM('manhã', 'tarde', 'noite', 'madrugada')`);
        await queryRunner.query(`CREATE TYPE "public"."events_type_enum" AS ENUM('piaggio', 'showcase')`);
        await queryRunner.query(`CREATE TABLE "events" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "duration" character varying NOT NULL, "period" "public"."events_period_enum" NOT NULL, "number_clients" character varying NOT NULL, "type" "public"."events_type_enum" NOT NULL, "cleaning_cost" character varying NOT NULL, "showcase_cost" character varying NOT NULL, "piaggio_cost" character varying NOT NULL, "number_attendants" character varying NOT NULL, "hourly_rate" character varying NOT NULL, "food_allowance" character varying NOT NULL, "transport_allowance" character varying NOT NULL, "total" character varying NOT NULL, "start_date" character varying NOT NULL, "start_time" character varying NOT NULL, "end_date" character varying NOT NULL, "end_time" character varying NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estimates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total_amount" character varying NOT NULL, "sales_type" character varying NOT NULL, "start_date" character varying NOT NULL, "start_time" character varying NOT NULL, "end_date" character varying NOT NULL, "end_time" character varying NOT NULL, "royalties" character varying NOT NULL, "bonus" character varying NOT NULL, "bonus_value" integer NOT NULL, "clientId" uuid, "locationsId" uuid, "issuerId" uuid, "eventsId" uuid, CONSTRAINT "PK_447af75b2f6025adf7f80703810" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city" character varying NOT NULL, "state" character varying NOT NULL, "address" character varying NOT NULL, "number" character varying NOT NULL, "cep" character varying NOT NULL, "additional_adress" character varying NOT NULL, "transportation_costs" character varying NOT NULL, "distance" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "neighborhood" character varying NOT NULL, "total" character varying NOT NULL, "estimateId" uuid, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estimates_flavors_flavors" ("estimatesId" uuid NOT NULL, "flavorsId" uuid NOT NULL, CONSTRAINT "PK_49b4aaa172f3101a658d4380767" PRIMARY KEY ("estimatesId", "flavorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_da86048c8792d190c4028018c8" ON "estimates_flavors_flavors" ("estimatesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_70b527a6eca5dd2555c22ab3da" ON "estimates_flavors_flavors" ("flavorsId") `);
        await queryRunner.query(`ALTER TABLE "accountReceivable" ADD CONSTRAINT "FK_cd149aefba05bcc5998b59f7094" FOREIGN KEY ("issuerId") REFERENCES "issuer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accountReceivable" ADD CONSTRAINT "FK_9ddfc1e9f591ec3e16b8b00ae89" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accountPayables" ADD CONSTRAINT "FK_2307caa8157588caa5359217fa8" FOREIGN KEY ("issuerId") REFERENCES "issuer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_c4de4082c549de0493d144647d9" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_95e699e08c9f87a436f57aba6b4" FOREIGN KEY ("locationsId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_e940dc77ba2c878a782c9287c0b" FOREIGN KEY ("issuerId") REFERENCES "issuer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_e4113e37025b939bcdc6f7554a4" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_6521943417a2a55c0eaa42664c3" FOREIGN KEY ("estimateId") REFERENCES "estimates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" ADD CONSTRAINT "FK_da86048c8792d190c4028018c82" FOREIGN KEY ("estimatesId") REFERENCES "estimates"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" ADD CONSTRAINT "FK_70b527a6eca5dd2555c22ab3daf" FOREIGN KEY ("flavorsId") REFERENCES "flavors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" DROP CONSTRAINT "FK_70b527a6eca5dd2555c22ab3daf"`);
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" DROP CONSTRAINT "FK_da86048c8792d190c4028018c82"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_6521943417a2a55c0eaa42664c3"`);
        await queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_e4113e37025b939bcdc6f7554a4"`);
        await queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_e940dc77ba2c878a782c9287c0b"`);
        await queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_95e699e08c9f87a436f57aba6b4"`);
        await queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_c4de4082c549de0493d144647d9"`);
        await queryRunner.query(`ALTER TABLE "accountPayables" DROP CONSTRAINT "FK_2307caa8157588caa5359217fa8"`);
        await queryRunner.query(`ALTER TABLE "accountReceivable" DROP CONSTRAINT "FK_9ddfc1e9f591ec3e16b8b00ae89"`);
        await queryRunner.query(`ALTER TABLE "accountReceivable" DROP CONSTRAINT "FK_cd149aefba05bcc5998b59f7094"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_70b527a6eca5dd2555c22ab3da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_da86048c8792d190c4028018c8"`);
        await queryRunner.query(`DROP TABLE "estimates_flavors_flavors"`);
        await queryRunner.query(`DROP TABLE "locations"`);
        await queryRunner.query(`DROP TABLE "estimates"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TYPE "public"."events_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."events_period_enum"`);
        await queryRunner.query(`DROP TABLE "flavors"`);
        await queryRunner.query(`DROP TABLE "issuer"`);
        await queryRunner.query(`DROP TABLE "accountPayables"`);
        await queryRunner.query(`DROP TABLE "accountReceivable"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
