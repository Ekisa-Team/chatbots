import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller({
  path: 'webhooks',
  version: '1',
})
export class WebhooksController {
  @Post('twilio')
  twilio(@Req() request: Request) {
    const { From: from, Body: body } = request.body;
    console.log({ from, body });
  }
}
