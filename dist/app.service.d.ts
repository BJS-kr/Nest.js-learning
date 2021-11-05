import { Connection } from 'typeorm';
export declare class AppService {
    private connection;
    constructor(connection: Connection);
    getHello(): string;
    googleLogin(googleUser: any): Promise<void>;
    facebookLogin(facebookuser: any): Promise<void>;
    makeVideoAndUpload(): Promise<string>;
}
