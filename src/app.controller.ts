import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import {
  ApiTags,
  ApiResponse,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Social } from './entities/social.entity';
import { RedirectOrTokenInterceptor } from './interceptors/redirect.interceptor';
import { GoogleUser } from './decorators/decorators';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ description: 'root' })
  @ApiOkResponse()
  getHello(): string {
    return this.appService.getHello();
  }

  // 함수 이름 상관없다. 그냥 AuthGuard가 google이면 첫 진입 후 정해진 경로로 리디렉션 되는 것 뿐임
  // 내가 본 예제에선 req를 인자로 넣는데 그거 없어도 잘 된다.
  @Get('social/google')
  @ApiOperation({ description: 'google log in' })
  @ApiBadRequestResponse()
  @ApiOkResponse()
  @UseGuards(AuthGuard('google'))
  async googleOauth20() {}

  @Get('google/auth') // 이 주소는 구글 클라우드에 등록한 리디렉션 경로
  @UseInterceptors(new RedirectOrTokenInterceptor('/'))
  @ApiOperation({ description: 'google log-in redirection address' })
  @ApiResponse({ status: 302, description: 'User already logged-in' })
  @ApiCreatedResponse({ type: Social })
  @UseGuards(AuthGuard('google'))
  async googleOauthRedirect(@GoogleUser() user) {
    return await this.appService.googleLogin(user);
  }
}
