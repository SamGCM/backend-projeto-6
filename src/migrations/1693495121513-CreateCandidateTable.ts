import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCandidateTable1693495121513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'candidates',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'document',
                    type: 'varchar',
                },
                {
                    name: 'dateOfBirth',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'phone',
                    type: 'varchar',
                },
                {
                    name: 'schooling',
                    type: 'varchar',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('candidates')
    }

}
