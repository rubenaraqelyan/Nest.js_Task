import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAssetTable162100 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'type',
                        type: 'int',
                    },
                    {
                        name: 'level',
                        type: 'int',
                    },
                    {
                        name: 'address',
                        type: 'varchar',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'asset',
            new TableForeignKey({
                columnNames: ['address'],
                referencedTableName: 'user',
                referencedColumnNames: ['address'],
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset', 'FK_asset_user_address');
        await queryRunner.dropTable('asset');
    }
}
