import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MovieGuard } from 'src/movie.guard';
import { MovieService } from './movie.service';

@Controller('movie')
@UseGuards(MovieGuard)
@UsePipes(
  new ValidationPipe({
    // global scope로 설정할 수도 있다.
    transform: true, //implicit한 type conversion을 활성화한다.
    forbidNonWhitelisted: true, // fNWL이 활성화되려면 whitelist가 true여야 한다.
    whitelist: true, // whitelist의 strip의 의미는 예상되지 않은 propoerties를 remove한다는 것
  }),
)
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get(':movieId') // 이미 validation pipe에서 implicit하게 conversion을 수행중이지만, 이와 같이 explicit하게 conversion을 수행 할 수도 있다.
  // every path parameter and query parameter comes over the network as a string by default (nestjs validation)
  // 그래서 ParseStringPipe는 없다. string을 변환하는 pipe밖에 없음
  findOneMovie(@Param('movieId', ParseIntPipe) id: number) {
    return typeof id;
  }
  @Get()
  set() {
    return this.movieService.set();
  }
  @Get('test')
  get() {
    return this.movieService.get();
  }
}
