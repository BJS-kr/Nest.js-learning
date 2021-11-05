import { Movie } from './movie.entity';
export declare class User {
    id: number;
    userId: string;
    hashedPassword: string;
    salt: string;
    movies: Movie[];
    registeredAt: Date;
}
