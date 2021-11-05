import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Response, Request } from 'express';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const res = ctx.switchToHttp().getResponse<Response>();
    return res.locals.user;
  },
);

export const GoogleUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    console.log('구글유저 데코레이터, 유저정보:', req.user);
    return req.user;
  },
);

export const FacebookUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    return req.user;
  },
);
