"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const create_course_dto_1 = require("./dto/create-course.dto");
const course_service_1 = require("./course.service");
const common_2 = require("@nestjs/common");
let CoursesController = class CoursesController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async create(createCourseDto) {
        return this.courseService.create(createCourseDto);
    }
    async list(req) {
        let options = {};
        if (req.query.search) {
            options = {
                $or: [
                    { title: new RegExp(req.query.search.toString(), 'i') },
                    { instructor: new RegExp(req.query.search.toString(), 'i') }
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
};
exports.CoursesController = CoursesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_dto_1.CreateCourseDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "list", null);
exports.CoursesController = CoursesController = __decorate([
    (0, common_1.Controller)('api/courses'),
    __metadata("design:paramtypes", [course_service_1.CoursesService])
], CoursesController);
//# sourceMappingURL=course.controller.js.map