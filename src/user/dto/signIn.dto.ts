import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './user.dto';

export class SignInDto extends OmitType(CreateUserDto, [
  'rePassword',
] as const) {}
