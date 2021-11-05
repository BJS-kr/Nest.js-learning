"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesTable = void 0;
const typeorm_1 = require("typeorm");
class MoviesTable {
    async up(QR) {
        await QR.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(QR) {
        QR.query('DROP TABLE movies');
    }
}
exports.MoviesTable = MoviesTable;
//# sourceMappingURL=movies.table.js.map