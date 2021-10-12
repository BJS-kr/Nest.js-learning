import { IsNumberString } from 'class-validator';

export class FindOneMovieParam {
  @IsNumberString()
  id: number;
}
