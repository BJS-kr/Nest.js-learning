import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Request, Response } from 'express';
import { Redis } from 'ioredis';

@Injectable()
export class MovieCacheInterceptor implements NestInterceptor {
  constructor(
    @Inject('REDIS')
    private redis: Redis,
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    const { movieId } = req.params;
    const isCached = await this.redis.sismember('movies', movieId);
    console.log('isCached? ', isCached);
    if (isCached) {
      console.log(typeof movieId);
      const result = await this.redis.hgetall(movieId);
      console.log(`캐쉬를 반환합니다. 캐쉬의 content:`, result);
      return of(result);
    } else console.log('Cache를 찾지 못했습니다. DB에서 데이터를 찾습니다.');

    return next.handle();
  }
}
