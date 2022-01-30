import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { switchMap } from 'rxjs';
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

  mockAppointmentResponse(to: string, response: string): void {
    const payload = { to };

    switch (response) {
      case '1':
        this.httpService
          .post(
            'https://343e-181-131-18-240.ngrok.io/api/v1/apps/1/chatbots/1/template_messages/3/send',
            payload,
          )
          .subscribe();
        break;
      case '2':
        this.httpService
          .post(
            'https://343e-181-131-18-240.ngrok.io/api/v1/apps/1/chatbots/1/template_messages/4/send',
            payload,
          )
          .subscribe();
        break;
      default:
        this.httpService
          .post(
            'https://343e-181-131-18-240.ngrok.io/api/v1/apps/1/chatbots/1/template_messages/5/send',
            payload,
          )
          .pipe(
            switchMap(() =>
              this.httpService.post(
                'https://343e-181-131-18-240.ngrok.io/api/v1/apps/1/chatbots/1/template_messages/6/send',
                {
                  ...payload,
                  variables: {
                    name: 'Juan',
                    date: '23 de Febrero',
                    time: '5:00 PM',
                  },
                },
              ),
            ),
          )
          .subscribe();
        break;
    }
  }
}
