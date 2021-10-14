import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import Redis from 'ioredis';
import { Connection, getConnection, QueryRunner } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { MovieRepository } from './movie.repository';

const redis = new Redis({ host: 'redis' });
@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: MovieRepository,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private connection: Connection = getConnection(),
  ) {}
  public async AddMovie(movie) {
    const movie_ = new Movie();
    Object.assign(movie_, movie);
    this.movieRepository.create(movie_);
    const QR = this.connection.createQueryRunner();
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
    return redis.zadd('movies', 'INCR', 1, '권오빈 일대기');
  }
  set() {
    return this.cacheManager.set('bjs', 'jj');
  }
  getLike() {
    try {
      return redis.zrange('movies', 0, 0, 'WITHSCORES');
    } catch (e) {
      console.log(e);
    }

    // return this.cacheManager.get('bjs');
  }
}
