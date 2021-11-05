import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie } from './entities/movie.entity';
import { MovieModule } from './movie/movie.module';
import { UserModule } from './user/user.module';
import * as redisStore from 'cache-manager-redis-store';
import { User } from './entities/user.entity';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { GoogleStrategy } from './passport/google.strategy';
import { FacebookStrategy } from './passport/facebook.strategy';
import { Social } from './entities/social.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [Movie, User, Social],
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
    GoogleStrategy,
    FacebookStrategy,
  ],
})
export class AppModule {}
