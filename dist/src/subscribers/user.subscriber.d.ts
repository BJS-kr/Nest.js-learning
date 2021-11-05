import { User } from 'src/entities/user.entity';
import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(connection: Connection);
    listenTo(): typeof User;
    beforeInsert(event: InsertEvent<User>): void;
}
