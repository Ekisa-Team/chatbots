import { Module } from '@nestjs/common';
import { MessagingProvidersController } from './messaging-providers.controller';
import { MessagingProvidersService } from './messaging-providers.service';

@Module({
  controllers: [MessagingProvidersController],
  providers: [MessagingProvidersService],
})
export class MessagingProvidersModule {}
