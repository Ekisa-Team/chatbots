import { Module } from '@nestjs/common';
import { TwilioStrategy } from './twilio.strategy';

@Module({
  providers: [TwilioStrategy],
})
export class ChannelStrategyModule {}
