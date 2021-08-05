import { MigrationInterface, QueryRunner } from 'typeorm'

export class createUuidInProfileId1628169159795 implements MigrationInterface {
    name = 'createUuidInProfileId1628169159795'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_3825121222d5c17741373d8ad13" UNIQUE ("email"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "profile"')
    }
}
