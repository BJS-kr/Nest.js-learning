import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './movie.dto';

export class UpdateMovieDto extends PartialType(
  PickType(CreateMovieDto, ['desc', 'name'] as const),
) {}
