import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
    constructor(
        // 트랜잭션으로 처리
        @InjectRepository(Movie)
        private movieRepository: Repository<Movie>
        ,
        
        @Inject(CACHE_MANAGER) 
        private cacheManager: Cache
    ){}
    a = this.cacheManager.set('bjs', 'bjs', {ttl:300})
}
