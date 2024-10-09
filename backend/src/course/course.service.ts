import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from './course.entity';
import { Model } from 'mongoose';
import { Body } from '@nestjs/common';

@Injectable()
export class CoursesService {
    constructor(@InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>){

    }

    create(data) {
        return this.courseModel.create(data);
    }
    
    find(options) {
        return this.courseModel.find(options);
    }

    count(options) {
        return this.courseModel.countDocuments(options);
    }
}
