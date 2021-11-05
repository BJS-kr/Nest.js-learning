import { AppService } from './app.service';
import { Request, Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    googleOauth20(req: Request): Promise<void>;
    googleOauthRedirect(req: Request, res: Response): Promise<any>;
}
