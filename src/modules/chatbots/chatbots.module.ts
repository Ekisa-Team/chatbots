import { Module } from '@nestjs/common';
import { ChatbotsController } from './chatbots.controller';
import { ChatbotsService } from './chatbots.service';

@Module({
  providers: [ChatbotsService],
  controllers: [ChatbotsController],
})
export class ChatbotsModule {}
