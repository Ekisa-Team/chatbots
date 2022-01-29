import { Module } from '@nestjs/common';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';

@Module({
  providers: [AppsService],
  controllers: [AppsController],
})
export class AppsModule {}
