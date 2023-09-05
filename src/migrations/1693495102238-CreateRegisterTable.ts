import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRegisterTable1693495102238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'registers',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'status',
                    type: 'varchar',
                },
                // {
                //     name: 'candidate',
                //     type: 'uuid',
                // },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('registers')
    }

}
