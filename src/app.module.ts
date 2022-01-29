import { Module } from '@nestjs/common';
import { AppsModule } from './modules/apps/apps.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { ChatbotsModule } from './modules/chatbots/chatbots.module';
import { MessagingProvidersModule } from './modules/messaging-providers/messaging-providers.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';
import { ConfigProviderModule } from './providers/config-provider.module';
import { GqlProviderModule } from './providers/gql-provider.module';
import { PubSubModule } from './pub-sub/pub-sub.module';
import { ChannelStrategyModule } from './strategies/channel/channel-strategy.module';

@Module({
  imports: [
    // Config
    ConfigProviderModule,
    GqlProviderModule,
    PubSubModule,

    // Strategies
    ChannelStrategyModule,

    // Features
    AppsModule,
    ChatbotsModule,
    MessagingProvidersModule,
    ChannelsModule,
    WebhooksModule,
  ],
})
export class AppModule {}
