import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagingProvider } from '@prisma/client';
import { MessagingProvidersService } from './messaging-providers.service';

@Controller({
  path: 'messaging_providers',
  version: '1',
})
export class MessagingProvidersController {
  constructor(private messagingProvidersService: MessagingProvidersService) {}

  @Get()
  getProvider(): Promise<MessagingProvider[]> {
    return this.messagingProvidersService.getProvider();
  }

  @Post()
  createProvider(@Body() data: MessagingProvider): Promise<MessagingProvider> {
    return this.messagingProvidersService.createProvider(data);
  }
}
