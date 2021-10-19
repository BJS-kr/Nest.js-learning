import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UserInterceptor } from 'src/interceptors/user.interceptor';
import { SignInDto, signInSchema } from './dto/signIn.dto';
import { CreateUserDto, registerSchema } from './dto/user.dto';
import { UserService } from './user.service';
import { JoiValidationPipe } from 'src/pipes/user.validation.pipe';
import { Request, Response } from 'express';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiConflictResponse,
} from '@nestjs/swagger';
import { RedirectInterceptor } from 'src/interceptors/redirect.interceptor';

@ApiTags('user')
@Controller('user')
@UseInterceptors(UserInterceptor)
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UseInterceptors(new RedirectInterceptor('/'))
  @ApiOperation({ description: 'Sign-Up!' })
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiBody({
    type: CreateUserDto,
    description: 'Sign Up!',
  })
  @UsePipes(new JoiValidationPipe(registerSchema))
  async signUp(@Body() user: CreateUserDto) {
    return await this.userService.signUp(user);
  }

  @Post('signIn')
  @UseInterceptors(new RedirectInterceptor('/'))
  @ApiOperation({ description: 'Sign-In!' })
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiConflictResponse()
  @ApiBody({
    type: SignInDto,
    description: 'Sign In!',
  })
  @UsePipes(new JoiValidationPipe(signInSchema))
  async signIn(
    @Body() user: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.userService.signIn(user, res);
  }

  @Get('signOut')
  @ApiOperation({ description: 'Sign-Out!' })
  @ApiNoContentResponse()
  @HttpCode(204)
  async signOut(@Res({ passthrough: true }) res: Response) {
    res.status(204).clearCookie('accessToken');
  }
}
