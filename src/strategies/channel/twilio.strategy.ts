import { Injectable } from '@nestjs/common';
import { ChannelStrategy } from './channel.strategy';

@Injectable()
export class TwilioStrategy implements ChannelStrategy {
  validate: () => boolean;

  sendMessage: () => Promise<void>;
}
