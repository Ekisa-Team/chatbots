import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ChannelStrategyModule } from 'src/strategies/channel/channel-strategy.module';
import { ChatbotMessagesController } from './chatbot-messages.controller';
import { ChatbotMessagesService } from './chatbot-messages.service';

@Module({
  imports: [PrismaModule, ChannelStrategyModule],
  providers: [ChatbotMessagesService],
  controllers: [ChatbotMessagesController],
})
export class ChatbotMessagesModule {}
