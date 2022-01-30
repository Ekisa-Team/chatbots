import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ChannelStrategyModule } from 'src/strategies/channel/channel-strategy.module';
import { TemplateMessagesController } from './template-messages.controller';
import { TemplateMessagesService } from './template-messages.service';

@Module({
  imports: [PrismaModule, ChannelStrategyModule],
  providers: [TemplateMessagesService],
  controllers: [TemplateMessagesController],
})
export class TemplateMessagesModule {}
