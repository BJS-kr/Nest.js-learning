import * as Joi from 'joi';
export declare class CreateUserDto {
    readonly userId: string;
    readonly password: string;
    readonly rePassword: string;
}
export declare const registerSchema: Joi.ObjectSchema<any>;
