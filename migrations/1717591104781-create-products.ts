import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProducts1717591104781 implements MigrationInterface {
  name = 'CreateProducts1717591104781';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "description" text NOT NULL, "image" character varying(256) NOT NULL, "quantity" integer NOT NULL DEFAULT '0',"price" double precision NOT NULL DEFAULT '0', CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
