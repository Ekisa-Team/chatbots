import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagingProviderCreateInput } from 'src/@generated/messaging-provider/messaging-provider-create.input';
import { MessagingProvider } from 'src/@generated/messaging-provider/messaging-provider.model';
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
  createProvider(@Body() data: MessagingProviderCreateInput): Promise<MessagingProvider> {
    return this.messagingProvidersService.createProvider(data);
  }
}
