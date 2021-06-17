import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAutoUuidInProfile1623863672189 implements MigrationInterface {
    name = 'AddAutoUuidInProfile1623863672189'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "profile" DROP CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb"')
      await queryRunner.query('ALTER TABLE "profile" DROP COLUMN "id"')
      await queryRunner.query('ALTER TABLE "profile" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()')
      await queryRunner.query('ALTER TABLE "profile" ADD CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id")')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "profile" DROP CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb"')
      await queryRunner.query('ALTER TABLE "profile" DROP COLUMN "id"')
      await queryRunner.query('ALTER TABLE "profile" ADD "id" NOT NULL')
      await queryRunner.query('ALTER TABLE "profile" ADD CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id")')
    }
}
