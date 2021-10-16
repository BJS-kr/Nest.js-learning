import { IsNotEmpty, IsString } from 'class-validator';
import * as Joi from 'joi';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly rePassword: string;
}

export const registerSchema = Joi.object({
  userId: Joi.string().required().min(6, 'utf8').max(14, 'utf8'),
  password: Joi.string().required().min(10, 'utf8').max(30, 'utf8'),
  rePassword: Joi.ref('password'),
});
