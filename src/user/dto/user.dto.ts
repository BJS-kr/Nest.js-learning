import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
export class CreateUserDto {
  @ApiProperty({
    description: "User's ID that newly in",
    maxLength: 14,
    minLength: 6,
    required: true,
    readOnly: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly userId: string;
  @ApiProperty({
    description: 'User password',
    maxLength: 30,
    minLength: 10,
    required: true,
    readOnly: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @ApiProperty({
    description: 'Confirm password',
    required: true,
    readOnly: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly rePassword: string;
}

export const registerSchema = Joi.object({
  userId: Joi.string().required().min(6, 'utf8').max(14, 'utf8'),
  password: Joi.string().required().min(10, 'utf8').max(30, 'utf8'),
  rePassword: Joi.ref('password'),
});
