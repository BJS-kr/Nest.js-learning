import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 40 })
  title: string;
  @Column('varchar', { length: 100, nullable: true })
  desc: string;
  @Column('varchar', { length: 20, nullable: true })
  name: string;
  @Column('int', { default: 0 })
  like: number;
  @ManyToOne(() => User, (user) => user.movies)
  user: User;
}
