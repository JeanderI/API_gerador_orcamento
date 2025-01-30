import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1738255465739 implements MigrationInterface {
    name = 'InitialMigration1738255465739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "issuer" ADD CONSTRAINT "UQ_8b52bd0f8726bc6e03095f1428e" UNIQUE ("cnpj")`);
        await queryRunner.query(`ALTER TABLE "issuer" ADD CONSTRAINT "UQ_9bc66ce1c8570549d2121eec5b5" UNIQUE ("company_name")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_c2528f5ea78df3e939950b861c0" UNIQUE ("cnpj")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_99ba9f1605b7b03bfaf8e6badfa" UNIQUE ("company_name")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_b48860677afe62cd96e12659482"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_99ba9f1605b7b03bfaf8e6badfa"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_c2528f5ea78df3e939950b861c0"`);
        await queryRunner.query(`ALTER TABLE "issuer" DROP CONSTRAINT "UQ_9bc66ce1c8570549d2121eec5b5"`);
        await queryRunner.query(`ALTER TABLE "issuer" DROP CONSTRAINT "UQ_8b52bd0f8726bc6e03095f1428e"`);
    }

}
