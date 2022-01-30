import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CryptModule } from 'src/crypt/crypt.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';

@Module({
  imports: [PrismaModule, CryptModule, HttpModule],
  controllers: [WebhooksController],
  providers: [WebhooksService],
})
export class WebhooksModule {}
