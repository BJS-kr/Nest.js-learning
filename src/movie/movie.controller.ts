import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
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
