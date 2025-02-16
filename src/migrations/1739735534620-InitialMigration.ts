import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1739735534620 implements MigrationInterface {
    name = 'InitialMigration1739735534620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estimates" DROP COLUMN "royalties"`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD "royalties" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estimates" DROP COLUMN "bonus_value"`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD "bonus_value" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estimates" DROP COLUMN "bonus_value"`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD "bonus_value" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estimates" DROP COLUMN "royalties"`);
        await queryRunner.query(`ALTER TABLE "estimates" ADD "royalties" character varying NOT NULL`);
    }

}
