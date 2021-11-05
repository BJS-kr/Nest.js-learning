import { Movie } from 'src/entities/movie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {}
