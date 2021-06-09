import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateProfileTable1623240775412 implements MigrationInterface {
    name = 'CreateProfileTable1623240775412'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "profile" ("id" character varying NOT NULL, "name" character varying, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_3825121222d5c17741373d8ad13" UNIQUE ("email"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "profile"')
    }
}
