import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProductTable16220000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'address',
                        type: 'varchar',
                    },
                    {
                        name: 'catalogId',
                        type: 'int',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'product',
            new TableForeignKey({
                columnNames: ['address'],
                referencedTableName: 'user',
                referencedColumnNames: ['address'],
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'product',
            new TableForeignKey({
                columnNames: ['catalogId'],
                referencedTableName: 'catalog',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('product', 'FK_product_user_address');
        await queryRunner.dropForeignKey('product', 'FK_product_catalog_id');
        await queryRunner.dropTable('product');
    }
}
