import { Model } from 'mongoose';
import { User, UserDocument } from './user/user.entity';
export declare class AppService {
    private userModel;
    constructor(userModel: Model<User>);
    create(user: User): Promise<UserDocument>;
    findOne(filter: Partial<User>): Promise<UserDocument | null>;
}
