import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new HttpException('올바른 형식의 데이터를 전송하세요', 400);
    }
    return value;
  }
}
