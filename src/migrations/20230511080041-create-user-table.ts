import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable123 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'address',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'cash1',
                        type: 'float',
                    },
                    {
                        name: 'cash2',
                        type: 'float',
                    },
                    {
                        name: 'cash3',
                        type: 'float',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}
