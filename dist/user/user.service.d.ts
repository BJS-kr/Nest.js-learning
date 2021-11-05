import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { SignInDto } from './dto/signIn.dto';
import { Response } from 'express';
export declare class UserService {
    private connection;
    constructor(connection: Connection);
    signUp(user: CreateUserDto): Promise<void | '가입완료'>;
    signIn(user: SignInDto, res: Response): Promise<void>;
}
