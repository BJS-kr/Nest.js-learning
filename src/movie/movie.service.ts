import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryBuilder, QueryRunner } from 'typeorm';
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

  async addMovie(
    movie: CreateMovieDto,
    user: Record<string, number>,
  ): Promise<Movie[]> {
    const movie_: Movie = Object.assign(new Movie(), movie, user);
    const QR: QueryRunner = this.connection.createQueryRunner();
    return await transaction(QR, [
      // transaction 동안 처리하고 싶은 내용들을 익명함수로 넣으면 됨
      () => QR.manager.save(movie_),
    ]);
  }
  async getOne(movieId: string): Promise<Movie> {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const movie: Movie = (
      await transaction(QR, [
        () => QR.manager.findOne(Movie, { where: { id: movieId } }),
      ])
    )[0];

    if (!movie)
      throw new HttpException('Cannot Find Movie!!!', HttpStatus.CONFLICT);

    await this.redis
      .multi()
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

  async patchMovie(movieId: string, movie: UpdateMovieDto): Promise<Movie> {
    const { desc, name } = movie;
    const QR: QueryRunner = this.connection.createQueryRunner();
    const updateMovie = Object.assign(new UpdateMovieDto(), movie);
    const result: Movie[] = await transaction(QR, [
      () => QR.manager.update(Movie, { id: movieId }, updateMovie),
      () => QR.manager.findOne(Movie, movieId),
    ]);
    console.log(result);
    // hset은 key가 존재하지 않을 경우 key 생성, field가 존재하지 않을경우 field생성하기 때문에 데이터 무결성을 유지하려면 먼저 캐시가 존재하는지 검증해야한다.
    if (await this.redis.sismember('movies', movieId)) {
      if (desc || name)
        await this.redis.hset(
          movieId,
          'updatedAt',
          result[1].updatedAt.toISOString(),
        );
      if (desc) await this.redis.hset(movieId, 'desc', desc);
      if (name) await this.redis.hset(movieId, 'name', name.join(', '));
    }
    return result[1];
  }

  async deleteMovie(movieId: string): Promise<void> {
    const QR: QueryRunner = this.connection.createQueryRunner();
    await transaction(QR, [() => QR.manager.softDelete(Movie, movieId)]);
    await this.redis.multi().srem('movies', movieId).unlink(movieId).exec();
  }

  async like(movieId: string): Promise<void> {
    const QR: QueryRunner = this.connection.createQueryRunner();
    await transaction(QR, [
      () => QR.manager.increment(Movie, { id: movieId }, 'like', 1),
    ]);
    if (await this.redis.sismember('movies', movieId))
      await this.redis.hincrby(movieId, 'like', 1);
  }
  async myMovie(user: any): Promise<Movie[]> {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const movieQB: QueryBuilder<Movie> = QR.manager.createQueryBuilder(
      Movie,
      'movies',
    );
    let selects: string[];
    let joinColumn: string;
    let whereClause: [string, Record<string, string>];
    if (!isNaN(user)) {
      selects = ['movies', 'user.id', 'user.userId', 'user.registeredAt'];
      joinColumn = 'movies.localUser';
      whereClause = ['movies.localUser = :localUser', { localUser: user }];
    } else {
      selects = ['movies', 'user'];
      joinColumn = 'movies.socialUser';
      whereClause = ['movies.socialUser = :socialUser', { socialUser: user }];
    }
    return await transaction(QR, [
      () =>
        movieQB
          .select(selects)
          .innerJoin(joinColumn, 'user')
          .where(...whereClause)
          .getMany(),
    ]);
  }
}
