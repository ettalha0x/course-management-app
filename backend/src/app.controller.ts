import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import {User} from './user/user.entity';
import { IsStrongPassword } from 'class-validator';

@Controller('api/auth')
export class AppController {
    constructor(private readonly appService: AppService,
        private jwtService: JwtService
        ) {
    }

    @Post('register')
    async register(
        @Body('name') name: string, 
        @Body('email') email: string, 
        @Body('password') password: string
    ) {
        const hashedPassword = await bcrypt.hash(password, 8);

        const user = await this.appService.create({
            name,
            email,
            password: hashedPassword,
        });
        const userObject = user.toObject();
        delete userObject.password;
        return userObject;
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ){
        const user = await this.appService.findOne({ email });

        if(!user){
            throw new BadRequestException('there is no user with this email');
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new BadRequestException('Email or Password is incorrect');
        }

        const jwt = await this.jwtService.signAsync({ id: user._id });

        response.cookie('jwt', jwt, {httpOnly: true});
        return {
            message: 'Login Successfully'
        };
    }

    @Get('user')
    async user(@Req() request: Request) {

        try {
            const cookie = request.cookies['jwt'];
            const data = await this.jwtService.verifyAsync(cookie);

            const user = await this.appService.findOne({ _id: data['id'] } as Partial<User>);
            const userObject = user.toObject();

            const {password, ...result} = userObject;
            return result;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt');
        return {
            message: 'Logout Successfully'
        };
    }
}