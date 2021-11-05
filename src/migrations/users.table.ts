import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UsersTable implements MigrationInterface {
  async up(QR: QueryRunner): Promise<any> {
    await QR.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int8',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'userId',
            type: 'varchar',
            length: '20',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'hashedPassword',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'salt',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'registeredAt',
            type: 'datetime',
            isGenerated: true,
          },
        ],
      }),
    );
  }
  async down(QR: QueryRunner): Promise<any> {
    QR.query('DROP TABLE users');
  }
}
