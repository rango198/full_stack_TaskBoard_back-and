import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';
import { TimeBlockModule } from './time-block/time-block.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, TaskModule, PomodoroModule, TimeBlockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}