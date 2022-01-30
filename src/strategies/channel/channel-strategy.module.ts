import { Module } from '@nestjs/common';
import { TwilioStrategy } from './twilio.strategy';

@Module({
  providers: [TwilioStrategy],
  exports: [TwilioStrategy],
})
export class ChannelStrategyModule {}
