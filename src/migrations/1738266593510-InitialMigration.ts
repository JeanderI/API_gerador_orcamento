import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1738266593510 implements MigrationInterface {
    name = 'InitialMigration1738266593510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flavors" ADD "total" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flavors" DROP COLUMN "total"`);
    }

}
