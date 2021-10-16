import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
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
import { MovieCacheInterceptor } from 'src/interceptors/cache.interceptor';
import { Response } from 'express';
import { UpdateMovieDto } from './dto/update.movie.dto';

@Controller('movie')
@UseGuards(MovieGuard)
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
  // 영화 등록
  @Post()
  addMovie(@Body() body: CreateMovieDto, @Res() res: Response) {
    res.send({
      result: this.movieService.addMovie(body, { user: res.locals.user }),
    });
  }
  // 영화 한개 정보
  @Get(':movieId') // 이미 validation pipe에서 implicit하게 conversion을 수행중이지만, 이와 같이 explicit하게 conversion을 수행 할 수도 있다.
  @UseInterceptors(MovieCacheInterceptor)
  // every path parameter and query parameter comes over the network as a string by default (nestjs validation)
  // 그래서 ParseStringPipe는 없다. string을 변환하는 pipe밖에 없음
  getOne(@Param('movieId') movieId: string) {
    return this.movieService.getOne(movieId);
  }
  // 영화 수정
  @Patch(':movieId')
  patchMovie(@Param('movieId') movieId: string, @Body() movie: UpdateMovieDto) {
    return this.movieService.patchMovie(movieId, movie);
  }

  // 좋아요
  @Get('like/:movieId')
  like(@Param('movieId') movieId: string) {
    return this.movieService.like(movieId);
  }
  // 내가 올린 영화들만 가져오기
  @Get('myMovie')
  myMovie() {}
}
