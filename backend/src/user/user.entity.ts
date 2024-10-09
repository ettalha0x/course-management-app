import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsString } from "class-validator";
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User> & User;

@Schema()
export class User {
    @Prop({required: true})
    @IsString()
    name: string;

    @Prop({required: true, unique: true})
    @IsEmail()
    email: string;

    @Prop({required: true})
    @IsString()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);