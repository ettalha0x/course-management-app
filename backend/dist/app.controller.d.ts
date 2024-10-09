import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { User } from './user/user.entity';
export declare class AppController {
    private readonly appService;
    private jwtService;
    constructor(appService: AppService, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<{
        name: string;
        email: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
