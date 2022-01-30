import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';

@Module({
  imports: [PrismaModule],
  providers: [ChannelsService],
  controllers: [ChannelsController],
})
export class ChannelsModule {}
