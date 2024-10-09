import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';
import { Factory } from "nestjs-seeder";

export type CourseDocument = HydratedDocument<Course>;

@Schema()

export class Course {


    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    instructor: string;

    @Prop()
    schedule: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);