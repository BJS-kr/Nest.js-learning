import { Injectable } from '@nestjs/common';
import { Connection, getConnection, QueryRunner, Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { hash, genSalt, compare } from 'bcryptjs';
import { SignInDto } from './dto/signIn.dto';
import { User } from 'src/entities/user.entity';
import { sign } from 'jsonwebtoken';
@Injectable()
export class UserService {
  constructor(private connection: Connection = getConnection()) {}
  private QR: QueryRunner = this.connection
    .createQueryRunner()
    .manager.getCustomRepository(UserRepository).queryRunner;
  async signUp(user: CreateUserDto) {
    const QR: QueryRunner = this.connection
      .createQueryRunner()
      .manager.getCustomRepository(UserRepository).queryRunner;

    const rounds = 10;
    const password = user.password;
    const hashedPassword = await hash(password, rounds);
    const salt = await genSalt();

    await QR.connect();
    await QR.startTransaction();
    try {
      await QR.query(
        'INSERT INTO user (userId, hashedPassword, salt) VALUES (?, ?, ?)',
        [user.userId, hashedPassword, salt],
      );
      await QR.commitTransaction();
    } catch (e) {
      await QR.rollbackTransaction();
    } finally {
      await QR.release();
    }
  }
  async signIn(idAndPassword: SignInDto) {
    const { userId, password } = idAndPassword;
    await this.QR.connect();
    await this.QR.startTransaction();
    try {
      const user = await this.QR.manager.findOne(User, {
        where: { userId: userId },
      });
      const result = user
        ? await compare(password, user.hashedPassword)
        : new Error('User does not Exists');
      if (typeof result === 'boolean') {
        if (result) return sign({ id: user.id }, 'test', { expiresIn: 999999 });
        else return 0;
      } else return -1;
    } catch (e) {
      await this.QR.rollbackTransaction();
    } finally {
      await this.QR.release();
    }
  }
}
