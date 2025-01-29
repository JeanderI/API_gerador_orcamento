import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1738178834409 implements MigrationInterface {
    name = 'InitialMigration1738178834409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_eb2c4028768d1e297a4b579d8a3"`);
        await queryRunner.query(`ALTER TABLE "estimates" RENAME COLUMN "costumerId" TO "clientId"`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpj" character varying NOT NULL, "name" character varying NOT NULL, "company_name" character varying NOT NULL, "state_registration" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_c4de4082c549de0493d144647d9" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estimates" DROP CONSTRAINT "FK_c4de4082c549de0493d144647d9"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`ALTER TABLE "estimates" RENAME COLUMN "clientId" TO "costumerId"`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD CONSTRAINT "FK_eb2c4028768d1e297a4b579d8a3" FOREIGN KEY ("costumerId") REFERENCES "costumers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
