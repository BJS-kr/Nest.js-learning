import { IsNumber } from 'class-validator';
import { CreateMovieDto } from './movie.dto';
export class UserIncludedCreateMovieDto extends CreateMovieDto {
  @IsNumber()
  readonly user: number;
}
