import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1738265148054 implements MigrationInterface {
    name = 'InitialMigration1738265148054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" ADD "transportation_costs" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "distance" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "distance"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "transportation_costs"`);
    }

}
