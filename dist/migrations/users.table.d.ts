import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UsersTable implements MigrationInterface {
    up(QR: QueryRunner): Promise<any>;
    down(QR: QueryRunner): Promise<any>;
}
