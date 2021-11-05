import { Social } from './social.entity';
import { User } from './user.entity';
export declare class Movie {
    id: number;
    title: string;
    desc: string;
    name: string[];
    like: number;
    localUser: User;
    socialUser: Social;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
