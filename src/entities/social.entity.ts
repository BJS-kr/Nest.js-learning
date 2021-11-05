import { IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Movie } from './movie.entity';

@Entity({ database: 'db', name: 'socials' })
export class Social {
  @PrimaryColumn()
  @IsEmail()
  id: string;
  @Column('varchar', { length: 20, nullable: false })
  firstName: string;
  @Column('varchar', { length: 20, nullable: false })
  lastName: string;
  @Column('varchar', { length: 300, nullable: true })
  photo: string;
  @Column('char', { length: 1, nullable: false })
  from: string;
  @OneToMany(() => Movie, (movie) => movie.socialUser, {
    cascade: ['update', 'remove'],
    createForeignKeyConstraints: true,
  })
  movies: Movie[];
  @CreateDateColumn({ type: 'date' })
  registeredAt: Date;
}
