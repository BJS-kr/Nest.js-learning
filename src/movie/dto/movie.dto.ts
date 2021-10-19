import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateMovieDto {
  @IsString()
  @ApiProperty({
    description: "Movie's title",
    required: true,
    readOnly: true,
  })
  readonly title: string;
  @IsString()
  @ApiProperty({
    description: "Movie's description",
    required: true,
    minLength: 10,
    maxLength: 50,
    readOnly: true,
  })
  @MinLength(10)
  @MaxLength(50)
  readonly desc: string = '내용을 입력해주세요';
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Played actors in Movie',
    type: 'array',
    items: { type: 'string' },
    readOnly: true,
  })
  @IsString({ each: true })
  readonly name: string[];
}
