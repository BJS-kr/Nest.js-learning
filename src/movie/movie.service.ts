import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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

  async addMovie(movie: CreateMovieDto, user: Record<string, number>) {
    const movie_: Movie = Object.assign(new Movie(), movie, user);
    const QR: QueryRunner = this.connection.createQueryRunner();
    return await transaction(QR, [
      // transaction 동안 처리하고 싶은 내용들을 익명함수로 넣으면 됨
      () => QR.manager.save(movie_),
    ]);
  }
  async getOne(movieId: string) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const movie: Movie = (
      await transaction(QR, [
        () => QR.manager.findOne(Movie, { where: { id: movieId } }),
      ])
    )[0];
    console.log(movie);
    if (!movie)
      throw new HttpException('Cannot Find Movie!!!', HttpStatus.CONFLICT);
    await this.redis
      .pipeline()
      .sadd('movies', movieId)
      .hset(
        movieId,
        'createdAt',
        movie.createdAt.toISOString(),
        'updatedAt',
        movie.updatedAt.toISOString(),
        'title',
        movie.title,
        'desc',
        movie.desc,
        'name',
        movie.name.join(', '),
        'id',
        movie.id,
        'like',
        movie.like,
      )
      .exec();
    return movie;
  }
  async patchMovie(movieId: string, movie: UpdateMovieDto) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const updateMovie = Object.assign(new UpdateMovieDto(), movie);
    await transaction(QR, [
      () => QR.manager.update(Movie, { id: movieId }, updateMovie),
    ]);
    // 캐쉬가 존재 한다면
    if (this.redis.sismember('movies', movieId)) {
      if (movie.desc) await this.redis.hset(movieId, 'desc', movie.desc);
      if (movie.name)
        await this.redis.hset(movieId, 'name', movie.name.join(', '));
    }
  }

  async deleteMovie(movieId: string) {
    const QR: QueryRunner = this.connection.createQueryRunner();

    await transaction(QR, [() => QR.manager.softDelete(Movie, movieId)]);
    await this.redis.pipeline().srem('movies', movieId).unlink(movieId).exec();
  }

  async like(movieId: string) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    await transaction(QR, [
      () => QR.manager.increment(Movie, { id: '90' }, 'like', 1),
    ]);
    if (await this.redis.sismember('movies', movieId))
      await this.redis.hset(
        movieId,
        'like',
        parseInt(await this.redis.hget(movieId, 'like')) + 1,
      );
  }
  async myMovie(user: string): Promise<Movie[]> {
    const QR: QueryRunner = this.connection.createQueryRunner();
    return await transaction(QR, [
      () =>
        QR.manager
          .createQueryBuilder(Movie, 'movies')
          .select(['movies', 'user.id', 'user.userId', 'user.registeredAt'])
          .innerJoin('movies.user', 'user')
          .where('movies.user = :user', { user })
          .getMany(),
    ]);
  }
}
