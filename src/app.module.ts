import { Module } from '@nestjs/common';
import { ConfigProviderModule } from './providers/config-provider.module';
import { GqlProviderModule } from './providers/gql-provider.module';
import { PubSubModule } from './pub-sub/pub-sub.module';

@Module({
  imports: [ConfigProviderModule, GqlProviderModule, PubSubModule],
})
export class AppModule {}
