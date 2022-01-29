import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TwilioStrategy } from 'src/strategies/channel/twilio.strategy';
import { TransportMessage } from 'src/types/transport-message.type';

@Injectable()
export class ChatbotMessagesService {
  constructor(private prismaService: PrismaService, private twilioStrategy: TwilioStrategy) {}

  sendMessage() {
    const transport: TransportMessage = {
      accountSid: 'AC3dca27bc1b7f1cc97a8cd037ca99a386',
      authToken: 'abcd8ae6eb707c0618aa26e891b7535f',
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+573042588116',
      body: 'Hello',
    };

    return this.twilioStrategy.sendMessage(transport);
  }
}
