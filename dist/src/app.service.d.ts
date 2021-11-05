import { Connection } from 'typeorm';
export declare class AppService {
    private connection;
    constructor(connection: Connection);
    getHello(): string;
    googleLogin(req: any, res: any): Promise<any>;
}
