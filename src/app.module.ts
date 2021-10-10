import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie } from 'movie/entities/movie.entity';
import { MovieModule } from 'movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: '0.0.0.0',
    port: 3001,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: [Movie],
    retryAttempts: 10,
    retryDelay: 3000,
    autoLoadEntities: false,
    keepConnectionAlive: false,
    extra: {
      connectionLimit:5
    }
  }), MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
