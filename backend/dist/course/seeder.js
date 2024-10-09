"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_seeder_1 = require("nestjs-seeder");
const course_seeder_1 = require("./course.seeder");
const mongoose_1 = require("@nestjs/mongoose");
const course_entity_1 = require("./course.entity");
(0, nestjs_seeder_1.seeder)({
    imports: [
        mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/courses'),
        mongoose_1.MongooseModule.forFeature([{ name: course_entity_1.Course.name, schema: course_entity_1.CourseSchema }]),
    ],
}).run([course_seeder_1.CourseSeeder]);
//# sourceMappingURL=seeder.js.map