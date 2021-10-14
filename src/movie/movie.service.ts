import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, QueryRunner } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { MovieRepository } from './movie.repository';
import { Redis } from 'ioredis';
@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: MovieRepository,
    @Inject('REDIS')
    private redis: Redis,
    private connection: Connection = getConnection(),
  ) {}
  public async AddMovie(movie) {
    const movie_ = new Movie();
    Object.assign(movie_, movie);
    this.movieRepository.create(movie_);
    const QR: QueryRunner = this.connection.createQueryRunner();
    await QR.connect();
    await QR.startTransaction();
    try {
      await QR.manager.save(movie_);
      await QR.commitTransaction();
      return 'success!';
    } catch (e) {
      console.log(e);
      await QR.rollbackTransaction();
    } finally {
      await QR.release();
    }
  }
  like() {
    return this.redis.zadd('movies', 'INCR', 1, '변정섭 일대기');
  }
  set() {
    return this.redis.set('bjs', 'jj');
  }
  getLike() {
    return this.redis.zrange('movies', 0, 0, 'WITHSCORES');
  }
}
