import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';

@Module({
  imports: [PrismaModule],
  providers: [AppsService],
  controllers: [AppsController],
})
export class AppsModule {}
