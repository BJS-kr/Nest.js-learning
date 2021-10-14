import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MovieInterceptor } from 'src/interceptors/movie.interceptor';
import { MovieGuard } from 'src/guards/movie.guard';
import { MovieService } from './movie.service';
import { ErrorInterceptor } from 'src/interceptors/error.interceptor';
import { CreateMovieDto } from './dto/movie.dto';

@Controller('movie')
// @UseGuards(MovieGuard)
@UsePipes(
  new ValidationPipe({
    // global scope로 설정할 수도 있다.
    transform: true, //implicit한 type conversion을 활성화한다.
    forbidNonWhitelisted: true, // fNWL이 활성화되려면 whitelist가 true여야 한다.
    whitelist: true, // whitelist 의 strip의 의미는 예상되지 않은 propoerties를 remove한다는 것
  }),
)
@UseInterceptors(MovieInterceptor)
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Post()
  insertMovie(@Body() body) {
    return this.movieService.AddMovie(body);
  }
  @Get(':movieId') // 이미 validation pipe에서 implicit하게 conversion을 수행중이지만, 이와 같이 explicit하게 conversion을 수행 할 수도 있다.
  // every path parameter and query parameter comes over the network as a string by default (nestjs validation)
  // 그래서 ParseStringPipe는 없다. string을 변환하는 pipe밖에 없음
  findOneMovie(@Param('movieId', ParseIntPipe) id: number) {
    return typeof id;
  }
  @Get()
  like() {
    return this.movieService.like();
  }
  @Get('test/test')
  @UseInterceptors(ErrorInterceptor)
  getLike() {
    return this.movieService.getLike();
  }
}
