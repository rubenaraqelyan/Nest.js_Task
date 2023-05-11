import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCatalogTable162 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'catalog',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'cost1',
                        type: 'int',
                    },
                    {
                        name: 'cost2',
                        type: 'int',
                    },
                    {
                        name: 'cost3',
                        type: 'int',
                    },
                    {
                        name: 'req1',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'req2',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'req3',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'category',
                        type: 'int',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('catalog');
    }
}
