import { CreateUserDto } from './user.dto';
import * as Joi from 'joi';
declare const SignInDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateUserDto, "rePassword">>;
export declare class SignInDto extends SignInDto_base {
}
export declare const signInSchema: Joi.ObjectSchema<any>;
export {};
