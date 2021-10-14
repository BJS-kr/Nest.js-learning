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

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(@Inject(CACHE_MANAGER) private cashManager: Cache) {}
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
