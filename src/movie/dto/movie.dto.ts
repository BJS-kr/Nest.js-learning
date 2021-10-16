import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsString()
  @MinLength(10)
  @MaxLength(50)
  readonly desc: string = '내용을 입력해주세요';
  @IsOptional()
  @IsString({ each: true })
  readonly name: string[];
}
