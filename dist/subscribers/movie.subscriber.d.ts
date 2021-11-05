import { Movie } from 'src/entities/movie.entity';
import { Connection, EntitySubscriberInterface, TransactionStartEvent, InsertEvent, UpdateEvent, TransactionCommitEvent, TransactionRollbackEvent } from 'typeorm';
export declare class MovieSubscriber implements EntitySubscriberInterface<Movie> {
    constructor(connection: Connection);
    listenTo(): typeof Movie;
    beforeInsert(event: InsertEvent<Movie>): void;
    afterInsert(event: InsertEvent<Movie>): void;
    beforeUpdate(event: UpdateEvent<Movie>): void;
    afterUpdate(event: UpdateEvent<Movie>): void;
    beforeTransactionStart(event: TransactionStartEvent): void;
    afterTransactionCommit(event: TransactionCommitEvent): void;
    afterTransactionRollback(event: TransactionRollbackEvent): void;
}
