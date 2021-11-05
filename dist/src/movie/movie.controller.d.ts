import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/movie.dto';
import { Response } from 'express';
import { UpdateMovieDto } from './dto/update.movie.dto';
export declare class MovieController {
    private movieService;
    constructor(movieService: MovieService);
    addMovie(body: CreateMovieDto, res: Response): void;
    getOne(movieId: string): Promise<import("../entities/movie.entity").Movie>;
    patchMovie(movieId: string, movie: UpdateMovieDto): Promise<import("../entities/movie.entity").Movie>;
    deleteMoive(movieId: string): Promise<void>;
    like(movieId: string): Promise<void>;
    myMovie(res: Response): Promise<import("../entities/movie.entity").Movie[]>;
}
