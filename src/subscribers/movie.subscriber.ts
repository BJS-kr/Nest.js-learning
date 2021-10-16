import { Movie } from 'src/entities/movie.entity';
import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  TransactionStartEvent,
  InsertEvent,
  UpdateEvent,
  TransactionCommitEvent,
  TransactionRollbackEvent,
} from 'typeorm';

@EventSubscriber()
export class MovieSubscriber implements EntitySubscriberInterface<Movie> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Movie;
  }

  beforeInsert(event: InsertEvent<Movie>) {
    console.log(`데이터 삽입을 시도합니다...`, event.entity);
  }

  afterInsert(event: InsertEvent<Movie>) {
    console.log(`데이터 삽입 시도가 완료되었습니다... `, event.entity);
  }

  beforeUpdate(event: UpdateEvent<Movie>) {
    console.log(`데이터 업데이트를 시도합니다... `, event.entity);
  }

  afterUpdate(event: UpdateEvent<Movie>) {
    console.log(`데이터 업데이트 시도가 완료되었습니다... `, event.entity);
  }

  beforeTransactionStart(event: TransactionStartEvent) {
    console.log('Transaction을 시도합니다...' + event);
  }

  afterTransactionCommit(event: TransactionCommitEvent) {
    console.log(`Transaction이 Commit되었습니다...`, event);
  }
  afterTransactionRollback(event: TransactionRollbackEvent) {
    console.log(`Transaction이 완료되지 못해 rollback되었습니다.`, event);
  }
}
