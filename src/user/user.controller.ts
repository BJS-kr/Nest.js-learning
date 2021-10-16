import {
  Body,
  Controller,
  Post,
  Res,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UserInterceptor } from 'src/interceptors/user.interceptor';
import { SignInDto, signInSchema } from './dto/signIn.dto';
import { CreateUserDto, registerSchema } from './dto/user.dto';
import { UserService } from './user.service';
import { Response } from 'express';
import { JoiValidationPipe } from 'src/pipes/user.validation.pipe';

@Controller('user')
@UseInterceptors(UserInterceptor)
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UsePipes(new JoiValidationPipe(registerSchema))
  async signUp(@Body() user: CreateUserDto) {
    return await this.userService.signUp(user);
  }
  @Post('signIn')
  @UsePipes(new JoiValidationPipe(signInSchema))
  async signIn(
    @Body() user: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.userService.signIn(user, res);
  }
}
