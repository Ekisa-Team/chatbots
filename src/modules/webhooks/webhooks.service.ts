import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CryptService } from 'src/crypt/crypt.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { WebhookPayloadDto } from './dto/webhook-payload.dto';

@Injectable()
export class WebhooksService {
  constructor(
    private prisma: PrismaService,
    private crypt: CryptService,
    private httpService: HttpService,
  ) {}

  async twilio(accessKey: string, payload: WebhookPayloadDto): Promise<any> {
    // Validates access key
    if (!accessKey) {
      throw new BadRequestException(`An Access key must be provided`);
    }

    // Validates chatbot existence through access key
    const chatbot = await this.prisma.chatbot.findUnique({
      where: { accessKey },
      include: {
        channel: true,
      },
    });
    if (!chatbot) {
      throw new BadRequestException(`Access key is invalid or doesn't belong to chatbot`);
    }

    const isValidKey = await this.crypt.validateAccessKey(
      chatbot.appId,
      chatbot.id,
      chatbot.accessKey,
    );
    if (!isValidKey) {
      throw new BadRequestException(`Access key is invalid`);
    }

    // Performs webhook request
    const { httpVerb, callbackUrl } = chatbot.channel;

    if (httpVerb === 'POST') {
      this.httpService.post(callbackUrl, payload).subscribe();
    } else {
      this.httpService.put(callbackUrl, payload).subscribe();
    }
  }
}
