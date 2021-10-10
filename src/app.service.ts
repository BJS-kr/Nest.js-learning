import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'J들의 연습용프로젝트!!!';
  }
}
