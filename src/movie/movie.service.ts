import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, QueryRunner } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { MovieRepository } from './movie.repository';
import { Redis } from 'ioredis';
import { transaction } from 'src/functions/transaction';
import { CreateMovieDto } from './dto/movie.dto';
import { UpdateMovieDto } from './dto/update.movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: MovieRepository,
    @Inject('REDIS')
    private redis: Redis,
    private connection: Connection,
  ) {}

  async addMovie(movie: CreateMovieDto, id: Record<string, number>) {
    const movie_: Movie = Object.assign(new Movie(), movie, id);
    const QR: QueryRunner = this.connection.createQueryRunner();
    return await transaction(QR, [
      // transaction 동안 처리하고 싶은 내용들을 익명함수로 넣으면 됨
      () => QR.manager.save(movie_),
    ]);
  }
  async getOne(movieId: number) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const movie: Movie = (
      await transaction(QR, [
        () => QR.manager.findOne(Movie, { where: { movieId } }),
      ])
    )[0];
    if (!movie) return HttpStatus.CONFLICT;
    await this.redis.sadd('movies', movieId);
    await this.redis.hset(
      movieId + '',
      'createdAt',
      movie.createdAt + '',
      'updatedAt',
      movie.updatedAt + '',
      'title',
      movie.title,
      'desc',
      movie.desc,
      'name',
      movie.name,
      'user',
      movie.user + '',
      'id',
      movie.id,
      'like',
      movie.like,
    );
    return movie;
  }
  async patchMovie(movieId: number, movie: UpdateMovieDto) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const updateMovie = Object.assign(new UpdateMovieDto(), movie);
    await transaction(QR, [
      () => QR.manager.update(Movie, { id: movieId }, updateMovie),
    ]);
    // 캐쉬가 존재 한다면
    if (this.redis.sismember('movies', movieId + '')) {
      if (movie.desc) await this.redis.hset(movieId + '', 'desc', movie.desc);
      if (movie.name) await this.redis.hset(movieId + '', 'name', movie.name);
    }
  }

  async like(movieId) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    await transaction(QR, [
      () =>
        QR.manager
          .createQueryBuilder(Movie, 'movie')
          .update(Movie)
          .set({ like: () => 'like + 1' })
          .where('movie.id=:id', { id: movieId })
          .execute(),
    ]);
    if (await this.redis.sismember('movies', movieId + ''))
      await this.redis.hset(
        movieId + '',
        'like',
        parseInt(await this.redis.hget(movieId + '', 'like')) + 1,
      );
    return await this.redis.hset('movies', 'INCR', 1, '변정섭 일대기');
  }
  async getLike() {
    return await this.redis.zrange('movies', 0, 0, 'WITHSCORES');
  }
}
