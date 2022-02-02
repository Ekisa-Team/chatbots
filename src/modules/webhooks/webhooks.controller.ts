import { Controller, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { WebhookPayloadDto } from './dto/webhook-payload.dto';
import { WebhooksService } from './webhooks.service';

@Controller({
  path: 'webhooks',
  version: '1',
})
export class WebhooksController {
  constructor(private webhooksService: WebhooksService) {}

  @Post('twilio')
  async twilio(@Req() request: Request, @Query('access_key') accessKey: string): Promise<any> {
    const payload: WebhookPayloadDto = {
      from: request.body.From,
      body: request.body.Body,
    };

    return this.webhooksService.twilio(accessKey, payload);
  }

  @Post('mock_post')
  mockPost(@Req() request: Request): void {
    console.log('POST WEBHOOK', request.body);
  }

  @Put('mock_put')
  mockPut(@Req() request: Request): void {
    console.log('PUT WEBHOOK', request.body);
  }

  @Post('mock_appointment_response')
  mockAppointmentResponse(@Req() request: Request): void {
    console.log('MOCK APPOINTMENT WEBHOOK', request.body);
    const url = `${request.protocol}://${request.rawHeaders[1]}/api/v1`;
    console.log(url);
    const { from: to, body: response } = request.body;
    this.webhooksService.mockAppointmentResponse(url, to, response.trim());
  }
}
