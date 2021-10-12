import { Controller, Get, UseGuards } from '@nestjs/common';
import { MovieGuard } from 'src/movie.guard';
import { MovieService } from './movie.service';

@Controller('movie')
@UseGuards(MovieGuard)
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get()
  set() {
    return this.movieService.set();
  }
  @Get('test')
  get() {
    return this.movieService.get();
  }
}
