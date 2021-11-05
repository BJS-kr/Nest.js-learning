import { Connection } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { MovieRepository } from './movie.repository';
import { Redis } from 'ioredis';
import { CreateMovieDto } from './dto/movie.dto';
import { UpdateMovieDto } from './dto/update.movie.dto';
export declare class MovieService {
    private movieRepository;
    private redis;
    private connection;
    constructor(movieRepository: MovieRepository, redis: Redis, connection: Connection);
    addMovie(movie: CreateMovieDto, user: Record<string, number>): Promise<Movie[]>;
    getOne(movieId: string): Promise<Movie>;
    patchMovie(movieId: string, movie: UpdateMovieDto): Promise<Movie>;
    deleteMovie(movieId: string): Promise<void>;
    like(movieId: string): Promise<void>;
    myMovie(user: any): Promise<Movie[]>;
}
