import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class RedirectInterceptor implements NestInterceptor {
    private readonly target;
    constructor(target: string);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>;
}
export declare class RedirectOrTokenInterceptor implements NestInterceptor {
    private readonly target;
    constructor(target: string);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>;
}
