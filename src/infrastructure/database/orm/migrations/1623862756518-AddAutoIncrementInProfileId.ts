import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAutoIncrementInProfileId1623862756518 implements MigrationInterface {
    name = 'AddAutoIncrementInProfileId1623862756518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE "profile_id_seq" OWNED BY "profile"."id"`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "id" SET DEFAULT nextval('profile_id_seq')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "profile_id_seq"`);
    }

}
