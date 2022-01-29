import { Injectable } from '@nestjs/common';
import { TransportMessage } from 'src/types/transport-message.type';
import twilio from 'twilio';
import { ChannelStrategy } from './channel.strategy';

@Injectable()
export class TwilioStrategy implements ChannelStrategy {
  validate: () => boolean;

  sendMessage({ accountSid, authToken, from, to, body, mediaUrl }: TransportMessage): Promise<any> {
    const client = twilio(accountSid, authToken);
    return client.messages.create({ from, to, body, mediaUrl });
  }
}
