import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';
@Injectable()
export class MovieGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    try {
      res.locals.id = verify(req.cookies.accessToken, 'test')['id'];
      return true;
    } catch (e) {
      return false;
    }
  }
}
