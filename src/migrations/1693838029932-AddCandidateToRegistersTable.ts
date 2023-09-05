import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddCandidateToRegisters1693838029932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'registers',
            new TableColumn({
                name: 'candidateId',
                type: 'uuid',
            })
        )

        await queryRunner.createForeignKey(
            'registers', 
            new TableForeignKey({
                columnNames: ['candidateId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'candidates',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('registers', 'candidates_registers_candidates')

        await queryRunner.dropColumn('registers', 'candidateId')
    }

}
