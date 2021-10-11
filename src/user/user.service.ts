import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Connection, getConnection, QueryRunner, Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
// import { hash, genSalt, compare } from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private connection: Connection = getConnection(),
  ) {}
  async signUp(user: CreateUserDto) {
    const QR: QueryRunner = this.connection.createQueryRunner();
    const QR2: QueryRunner = this.userRepository.manager.queryRunner;

    const rounds = 10;
    const password = user.password;
    // const hashedPassword = await hash(password, rounds);
    // const salt = await genSalt();
    // const userRepo = await QR.manager.getCustomRepository(this.userRepository);

    await QR.connect();
    await QR.startTransaction();
    try {
      // await QR.query(
      //   'INSERT INTO user (userId, hashedPassword, salt) VALUES (?, ?, ?)',
      //   [user.userId, hashedPassword, salt],
      // );
      await QR.commitTransaction();
    } catch (e) {
      await QR.rollbackTransaction();
    } finally {
      await QR.release();
    }
  }
}
