import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class MoviesTable implements MigrationInterface {
    up(QR: QueryRunner): Promise<any>;
    down(QR: QueryRunner): Promise<any>;
}
