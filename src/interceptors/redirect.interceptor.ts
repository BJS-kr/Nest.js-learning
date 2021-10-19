import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of, tap } from 'rxjs';
import { sign } from 'jsonwebtoken';
@Injectable()
export class RedirectInterceptor implements NestInterceptor {
  constructor(private readonly target: string) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();

    if (req.cookies.accessToken) {
      console.log('token found... redirecting...');
      return of(res.redirect(this.target));
    }
  }
}

@Injectable()
export class RedirectOrTokenInterceptor implements NestInterceptor {
  constructor(private readonly target: string) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    if (req.cookies.accessToken) {
      console.log('token found... redirecting...');
      return of(res.redirect(this.target));
    }
    const { user } = req;
    const accessToken = sign({ id: user.id }, 'test', {
      expiresIn: 9999999,
    });
    console.log(accessToken);
    return next
      .handle()
      .pipe(
        tap(
          res
            .status(201)
            .cookie('accessToken', accessToken)
            .send('로그인 성공!'),
        ),
      );
  }
}
