import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MessagingProvidersController } from './messaging-providers.controller';
import { MessagingProvidersService } from './messaging-providers.service';

@Module({
  imports: [PrismaModule],
  controllers: [MessagingProvidersController],
  providers: [MessagingProvidersService],
})
export class MessagingProvidersModule {}
