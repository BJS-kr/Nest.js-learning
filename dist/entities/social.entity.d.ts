import { Movie } from './movie.entity';
export declare class Social {
    id: string;
    firstName: string;
    lastName: string;
    photo: string;
    from: string;
    movies: Movie[];
    registeredAt: Date;
}
