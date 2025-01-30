import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1738259971467 implements MigrationInterface {
    name = 'InitialMigration1738259971467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "issuer" DROP CONSTRAINT "UQ_9bc66ce1c8570549d2121eec5b5"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "issuer" ADD CONSTRAINT "UQ_9bc66ce1c8570549d2121eec5b5" UNIQUE ("company_name")`);
    }

}
