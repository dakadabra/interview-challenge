import { TasksModule } from '@app/tasks';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
