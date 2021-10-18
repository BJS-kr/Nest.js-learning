import { HttpException, Injectable } from '@nestjs/common';
import { Connection, QueryBuilder, QueryRunner } from 'typeorm';
import { Social } from './entities/social.entity';
import { transaction } from './functions/transaction';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}
  getHello(): string {
    return 'J들의 연습용프로젝트!!!';
  }

  async googleLogin(req, res) {
    if (!req.user) {
      throw new HttpException('구글에 등록되지 않은 사용자입니다', 403);
    }
    req.user.id = req.user.email;
    delete req.user.email;
    const socialUser = Object.assign(new Social(), req.user, { from: 'g' });
    const QR: QueryRunner = this.connection.createQueryRunner();
    const isExsits = (
      await QR.query(
        `SELECT EXISTS (SELECT 1 FROM socials WHERE id = '${req.user.email}');`,
      )
    )[0].exists;
    if (!isExsits) {
      await transaction(QR, [() => QR.manager.save(socialUser)]);
    }
    const accessToken = sign({ id: req.user.id }, 'test', {
      expiresIn: 9999999,
    });
    console.log(accessToken);
    res.cookie('accessToken', accessToken).send('로그인 성공!');
  }
}
