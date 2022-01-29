import { Module } from '@nestjs/common';
import { AppsModule } from './modules/apps/apps.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { ChatbotMessagesModule } from './modules/chatbot-messages/chatbot-messages.module';
import { ChatbotsModule } from './modules/chatbots/chatbots.module';
import { MessagingProvidersModule } from './modules/messaging-providers/messaging-providers.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';
import { ConfigProviderModule } from './providers/config-provider.module';

@Module({
  imports: [
    // Config
    ConfigProviderModule,

    // Features
    AppsModule,
    ChatbotsModule,
    ChatbotMessagesModule,
    MessagingProvidersModule,
    ChannelsModule,
    WebhooksModule,
    ChatbotMessagesModule,
  ],
})
export class AppModule {}
