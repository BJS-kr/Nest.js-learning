import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class MoviesTable implements MigrationInterface {
  async up(QR: QueryRunner): Promise<any> {
    await QR.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'int8',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '40',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'desc',
            type: 'varchar',
            length: '100',
            isNullable: true,
            default: null,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '20',
            isNullable: true,
            isArray: true,
            default: null,
          },
          {
            name: 'like',
            type: 'int4',
            default: 0,
          },
          {
            name: 'createdAt',
            type: 'datetime',
            isGenerated: true,
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            isGenerated: true,
          },
          {
            name: 'deletedAt',
            type: 'datetime',
            isGenerated: true,
          },
        ],
      }),
    );
  }
  async down(QR: QueryRunner): Promise<any> {
    QR.query('DROP TABLE movies');
  }
}
