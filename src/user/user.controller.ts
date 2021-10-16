import {
  Body,
  Controller,
  Post,
  Res,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserInterceptor } from 'src/interceptors/user.interceptor';
import { SignInDto } from './dto/signIn.dto';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
@UsePipes(
  new ValidationPipe({
    transform: true,
    forbidNonWhitelisted: true,
    whitelist: true,
  }),
)
@UseInterceptors(UserInterceptor)
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  signUp(@Body() user: CreateUserDto) {
    return this.userService.signUp(user);
  }
  @Post('signIn')
  async signIn(
    @Body() user: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.userService.signIn(user);
    // res에 return을 붙이면 TypeError: Converting circular structure to JSON 발생. 대체 왜???
    if (typeof result === 'string') res.cookie('accessToken', result);
    else res.status(result);
  }
}
