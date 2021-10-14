import {
  CACHE_MANAGER,
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Cache } from 'cache-manager';
import { Request, Response } from 'express';
import { Redis } from 'ioredis';
import IORedis from 'ioredis';

@Injectable()
export class MovieCacheInterceptor implements NestInterceptor {
  constructor(
    @Inject(CACHE_MANAGER)
    private cashManager: Redis = new IORedis({ host: 'redis' }),
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const { movieId } = req.params;
    const cached: string = await this.cashManager.get(movieId);
    console.log('이게 캐쉬다!' + cached);
    if (cached) return of(res.json(JSON.parse(cached)));
    return next.handle();
  }
}
