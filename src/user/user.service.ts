import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { hash, genSalt, compare } from 'bcryptjs';
import { SignInDto } from './dto/signIn.dto';
import { User } from 'src/entities/user.entity';
import { sign } from 'jsonwebtoken';
import { transaction } from 'src/functions/transaction';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(private connection: Connection) {}
  // 메소드 바깥에 QR을 class member로 정의해두면 transaction이 한번만 작동한다.
  // 그 이유는 connection을 dependency를 initialize할 때 (앱 구동될때) 한번 connect되는데
  // 그걸 queryRunner.release()시켜버리니 연결이 영영 끊어져버리는 것이다.
  // 즉, 의도한대로 잘 동작하게 하려면 메 소드 내에 QR을 정의해서 사용해야 한다. 그때 그때 다시 연결되도록
  async signUp(user: CreateUserDto) {
    if (user.password !== user.rePassword) return '비밀번호 확인 불일치';
    const rounds = 10;
    const password = user.password;
    const hashedPassword = await hash(password, rounds);
    const salt = await genSalt();
    const user_ = Object.assign(new User(), {
      userId: user.userId,
      hashedPassword,
      salt,
    });
    const QR: QueryRunner = this.connection.createQueryRunner();
    if (!(await transaction(QR, [() => QR.manager.save(user_)])))
      throw new HttpException('이미 가입된 아이디입니다', 409);
    return '가입완료';
  }

  async signIn(user: SignInDto, res: Response) {
    const { userId, password } = user;
    const QR: QueryRunner = this.connection.createQueryRunner();
    const signInUser: User = (
      await transaction(QR, [
        () => QR.manager.findOne(User, { where: { userId } }),
      ])
    )[0];
    // res에 return을 붙이면 TypeError: Converting circular structure to JSON 발생
    if (!signInUser)
      throw new HttpException('유저를 찾을 수 없습니다', HttpStatus.CONFLICT);
    else if (!(await compare(password, signInUser.hashedPassword)))
      throw new HttpException(
        '아이디 혹은 비밀번호가 일치하지 않습니다',
        HttpStatus.BAD_REQUEST,
      );
    else
      res
        .cookie(
          'accessToken',
          sign({ id: signInUser.id }, 'test', { expiresIn: 9999999 }),
        )
        .send('로그인 성공!');
  }
}
