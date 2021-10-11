import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userId: string;
  @IsString()
  readonly password: string;
}
