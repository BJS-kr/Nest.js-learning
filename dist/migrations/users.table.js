"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTable = void 0;
const typeorm_1 = require("typeorm");
class UsersTable {
    async up(QR) {
        await QR.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(QR) {
        QR.query('DROP TABLE users');
    }
}
exports.UsersTable = UsersTable;
//# sourceMappingURL=users.table.js.map