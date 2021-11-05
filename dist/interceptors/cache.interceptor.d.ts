import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Redis } from 'ioredis';
export declare class MovieCacheInterceptor implements NestInterceptor {
    private redis;
    constructor(redis: Redis);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
