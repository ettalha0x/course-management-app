import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.entity';
import { readFileSync } from 'fs';
import { join } from 'path';

export class CourseSeeder implements Seeder {

    constructor(@InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>){

    }

    async drop(): Promise<any> {
        try {
            await this.courseModel.deleteMany({}).exec();
            console.log('All courses dropped successfully.');
        } catch (error) {
            console.error('Error dropping courses:', error);
        }
    }

    seed(): Promise<any> {
        const data = readFileSync(join(__dirname, '../data/courses_data.json')).toString();
        const courses = JSON.parse(data);
        return this.courseModel.insertMany(courses);
    }

}