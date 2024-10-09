import { Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto'
import { CoursesService } from './course.service';
import { Request } from 'express';
import { Body } from '@nestjs/common';

@Controller('api/courses')
export class CoursesController {
    
    constructor(private readonly courseService: CoursesService) {

    }

    @Post()
    async create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }

    @Get()
    async list(@Req() req: Request) {
        let options = {};
        if (req.query.search) {
            options = {
                $or: [
                    {title: new RegExp(req.query.search.toString(), 'i')},
                    {instructor: new RegExp(req.query.search.toString(), 'i')}
                ]
            };
        }
        const query = this.courseService.find(options);

        const page = parseInt(req.query.page?.toString()) || 1;
        const limit = 11;
        const total = await this.courseService.count(options);



        const data = await query.skip((page - 1) * limit).limit(limit).exec();
        return {
            data,
            total,
            page,
            last_page: Math.ceil(total / limit)
        };
    }
}

