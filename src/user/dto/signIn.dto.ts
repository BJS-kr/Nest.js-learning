import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './user.dto';
import * as Joi from 'joi';

export class SignInDto extends OmitType(CreateUserDto, [
  'rePassword',
] as const) {}

export const signInSchema = Joi.object({
  userId: Joi.string().required(),
  password: Joi.string().required(),
});
