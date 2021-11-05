import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    googleOauth20(): Promise<void>;
    googleOauthRedirect(user: any): Promise<void>;
    facebookAuth(): Promise<void>;
    facebookAuthRedirect(user: any): Promise<void>;
    makeVideoAndUpload(): Promise<string>;
}
