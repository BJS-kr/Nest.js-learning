import { SignInDto } from './dto/signIn.dto';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Request, Response } from 'express';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signUp(user: CreateUserDto, req: Request, res: Response): Promise<void | "가입완료">;
    signIn(user: SignInDto, req: Request, res: Response): Promise<void>;
    signOut(res: Response): Promise<void>;
}
