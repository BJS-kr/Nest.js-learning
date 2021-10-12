import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
@Unique(['userId'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: string;
  @Column()
  hashedPassword: string;
  @Column()
  salt: string;
  @OneToMany(() => Movie, (movie) => movie.user)
  movies: Movie[];
}
