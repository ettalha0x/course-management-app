import { Course, CourseDocument } from './course.entity';
import { Model } from 'mongoose';
export declare class CoursesService {
    private readonly courseModel;
    constructor(courseModel: Model<CourseDocument>);
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    find(options: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, "find", {}>;
    count(options: any): import("mongoose").Query<number, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Course> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, "countDocuments", {}>;
}
