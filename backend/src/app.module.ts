import { Module } from '@nestjs/common';

import { CoursesModule } from './course/course.module';

import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    CoursesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/courses', { autoCreate: true, }),
    UserModule,
    JwtModule.register({
      secret: 'coding-challenge-test',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
