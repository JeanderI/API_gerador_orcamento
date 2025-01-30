import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1738254102211 implements MigrationInterface {
    name = 'InitialMigration1738254102211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flavors" DROP CONSTRAINT "FK_0ef677caea4bec28f242921abf1"`);
        await queryRunner.query(`CREATE TABLE "estimates_flavors_flavors" ("estimatesId" uuid NOT NULL, "flavorsId" uuid NOT NULL, CONSTRAINT "PK_49b4aaa172f3101a658d4380767" PRIMARY KEY ("estimatesId", "flavorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_da86048c8792d190c4028018c8" ON "estimates_flavors_flavors" ("estimatesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_70b527a6eca5dd2555c22ab3da" ON "estimates_flavors_flavors" ("flavorsId") `);
        await queryRunner.query(`ALTER TABLE "flavors" DROP COLUMN "estimateId"`);
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" ADD CONSTRAINT "FK_da86048c8792d190c4028018c82" FOREIGN KEY ("estimatesId") REFERENCES "estimates"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" ADD CONSTRAINT "FK_70b527a6eca5dd2555c22ab3daf" FOREIGN KEY ("flavorsId") REFERENCES "flavors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" DROP CONSTRAINT "FK_70b527a6eca5dd2555c22ab3daf"`);
        await queryRunner.query(`ALTER TABLE "estimates_flavors_flavors" DROP CONSTRAINT "FK_da86048c8792d190c4028018c82"`);
        await queryRunner.query(`ALTER TABLE "flavors" ADD "estimateId" uuid`);
        await queryRunner.query(`DROP INDEX "public"."IDX_70b527a6eca5dd2555c22ab3da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_da86048c8792d190c4028018c8"`);
        await queryRunner.query(`DROP TABLE "estimates_flavors_flavors"`);
        await queryRunner.query(`ALTER TABLE "flavors" ADD CONSTRAINT "FK_0ef677caea4bec28f242921abf1" FOREIGN KEY ("estimateId") REFERENCES "estimates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
