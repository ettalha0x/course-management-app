import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './course.service';
import { Request } from 'express';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    create(createCourseDto: CreateCourseDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./course.entity").Course> & import("./course.entity").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./course.entity").Course> & import("./course.entity").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    list(req: Request): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./course.entity").Course> & import("./course.entity").Course & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./course.entity").Course> & import("./course.entity").Course & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
        total: number;
        page: number;
        last_page: number;
    }>;
}
