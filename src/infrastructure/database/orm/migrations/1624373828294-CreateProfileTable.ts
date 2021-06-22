import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProfileTable1624373828294 implements MigrationInterface {
    name = 'CreateProfileTable1624373828294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar, "username" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_3825121222d5c17741373d8ad13" UNIQUE ("email"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
