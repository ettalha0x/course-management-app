import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument} from './user/user.entity';

@Injectable()
export class AppService {
    constructor(
       @InjectModel(User.name) private userModel: Model<User>
    ) {

    }

    async create(user: User): Promise<UserDocument> {
        return await new this.userModel(user).save();
    }

    async findOne(filter: Partial<User>): Promise<UserDocument | null> {
        return this.userModel.findOne(filter).exec();
    }

}
