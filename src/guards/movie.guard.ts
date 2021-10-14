import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class MovieGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    try {
      console.log(req.cookies);
      console.log(req.headers);
      verify(req.cookies.accessToken, 'test');
      return true;
    } catch (e) {
      return false;
    }
  }
}
