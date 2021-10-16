import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie } from 'src/entities/movie.entity';
import { MovieModule } from 'src/movie/movie.module';
import { UserModule } from './user/user.module';
import * as redisStore from 'cache-manager-redis-store';
import { User } from './entities/user.entity';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { MoviesTable } from './migrations/movies.table';
import { UsersTable } from './migrations/users.table';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [Movie, User],
      retryAttempts: 3,
      retryDelay: 3000,
      autoLoadEntities: false,
      keepConnectionAlive: true, //hot reload기능을 사용하기 위해
      synchronize: true,
      extra: {
        connectionLimit: 5,
      },
      logging: true,
      // migrations: ['./migrations'],
      // migrationsRun: true,
      // migrationsTableName: 'JJ_migration',
    }),
    CacheModule.register({
      store: redisStore,
      host: 'redis',
      port: 6379,
      ttl: 99000,
      isGlobal: true,
    }),
    MovieModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
