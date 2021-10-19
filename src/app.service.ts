import { HttpException, Injectable } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';
import { Social } from './entities/social.entity';
import { transaction } from './functions/transaction';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}
  getHello(): string {
    return 'J들의 연습용프로젝트!!!';
  }

  async googleLogin(user) {
    if (!user) {
      throw new HttpException('구글에 등록되지 않은 사용자입니다', 403);
    }
    user.id = user.email;
    delete user.email;
    const socialUser = Object.assign(new Social(), user, { from: 'g' });
    const QR: QueryRunner = this.connection.createQueryRunner();
    const isExists = (
      await QR.query(
        `SELECT EXISTS (SELECT 1 FROM socials WHERE id = '${user.id}');`,
      )
    )[0].exists;
    if (!isExists) {
      await transaction(QR, [() => QR.manager.save(socialUser)]);
    }
    return;
  }
}
