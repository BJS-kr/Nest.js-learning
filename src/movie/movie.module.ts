import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../entities/movie.entity';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import Redis from 'ioredis';
import { MovieSubscriber } from 'src/subscribers/movie.subscriber';
@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [
    MovieService,
    { provide: 'REDIS', useValue: new Redis({ host: 'redis' }) },
    MovieSubscriber,
  ],
  controllers: [MovieController],
})
export class MovieModule {}
