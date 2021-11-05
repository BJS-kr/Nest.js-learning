import { QueryRunner } from 'typeorm';
export declare function transaction(QR: QueryRunner, anonymousReturnsQuery: any[]): Promise<any[]>;
