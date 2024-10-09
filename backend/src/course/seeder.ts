import { seeder } from "nestjs-seeder";
import { CourseSeeder } from "./course.seeder";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { Course, CourseSchema } from "./course.entity";

seeder({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/courses'),
        MongooseModule.forFeature([{name: Course.name, schema: CourseSchema}]),
    ],
}).run([CourseSeeder]);