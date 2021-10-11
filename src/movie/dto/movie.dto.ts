import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsOptional()
  @IsString()
  readonly desc: string = '내용을 입력해주세요';
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly user: number;
}
