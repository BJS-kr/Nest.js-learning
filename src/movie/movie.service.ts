import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Connection, getConnection, QueryRunner, Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private connection: Connection = getConnection(),
  ) {}

  public async originalAddMovie(movie: CreateMovieDto) {
    const QR: QueryRunner =
      await this.movieRepository.queryRunner.connection.createQueryRunner();
    await QR.connect();
    await QR.startTransaction();
    try {
      await QR.manager.save(movie);
      await QR.commitTransaction();
    } catch (e) {
      await QR.rollbackTransaction();
    } finally {
      await QR.release();
    }
  }

  public async addMovie(movie: CreateMovieDto) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const {
      connect,
      startTransaction: start,
      manager: { save },
      commitTransaction: commit,
      rollbackTransaction: rollback,
      release,
    } = QR;
    await connect();
    await start();
    try {
      await save(movie);
      await commit();
    } catch (e) {
      await rollback();
    } finally {
      await release();
    }
  }
  set() {
    return this.cacheManager.set('bjs', 'jj');
  }
  get() {
    return this.cacheManager.get('bjs');
  }
}
