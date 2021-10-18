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

    // 여기부터 req.user를 활용해 소셜 가입, 로그인 등 처리
    // 구현순서
    // exists메소드로 postgre의 social테이블에 user가 존재하는지 검증
    // 없다면 추가하고 jwt 반환, 있으면 그냥 jwt 반환
    // cookie반환은 appService의 googleAuth라우터에서 res로 처리
    // social 테이블의 PK는 uuid(기존 user테이블과 참조무결성을 위해 int가 아닌 uuid로)로? 아니면 이메일로?
    // 페이로드 올릴떄 꼭 키값은 id!!
    // jwt반환을 여기서 구현할 것이므로 꼭 PK 칼럼 이름이 'id'일 필요는 없다. 리턴하는 JwtPayLoad에 키를 id로만 지정하면 되는 것이라서...
    // 마지막으로 테이블을 따로 만들지 user테이블에 다 합칠지를 결정해야함. 사실 연습용이라서 뭘해도 상관없음;;
    // 데이터베이스 조건을 유지하려면 따로 테이블을 만드는게 맞다.
    // 또한 따로 테이블을 만들면 social과 movie간의 relation을 정의해야한다.
  }
}
