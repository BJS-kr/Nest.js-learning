import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class MovieInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Entering movie router...');
    return next
      .handle()
      .pipe(tap(() => console.log('Movie router finished...')));
  }
}

/**
 * bind extra logic before / after method execution
 * transform the result returned from a function
 * transform the exception thrown from a function
 * extend the basic function behavior
 * completely override a function depending on specific conditions (e.g., for caching purposes)
 */
