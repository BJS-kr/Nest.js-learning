import { QueryRunner } from 'typeorm';
export declare function transaction(QR: QueryRunner, anonymousReturnsQueryRunnerMethod: any[]): Promise<any[]>;
