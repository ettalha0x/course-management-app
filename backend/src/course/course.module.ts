import { Module } from '@nestjs/common';
import { CoursesController } from './course.controller';
import { CoursesService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './course.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Course.name, schema: CourseSchema}]) 
  ],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
