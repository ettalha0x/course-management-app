import { Seeder } from 'nestjs-seeder';
import { Model } from 'mongoose';
import { CourseDocument } from './course.entity';
export declare class CourseSeeder implements Seeder {
    private readonly courseModel;
    constructor(courseModel: Model<CourseDocument>);
    drop(): Promise<any>;
    seed(): Promise<any>;
}
