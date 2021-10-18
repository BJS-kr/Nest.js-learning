import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 함수 이름 상관없다. 그냥 AuthGuard가 google이면 첫 진입 후 정해진 경로로 리디렉션 되는 것 뿐임
  @Get('social/google')
  @UseGuards(AuthGuard('google'))
  async googleOauth20(@Req() req) {}

  @Get('google/auth') // 이 주소는 구글 클라우드에 등록한 리디렉션 경로
  @UseGuards(AuthGuard('google'))
  googleOauthRedirect(
    @Req() req: Request,
    // res를 사용해 반환한다면 사실 passthrough없어도 됨.
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.appService.googleLogin(req, res);
  }
}
