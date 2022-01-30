import { Module } from '@nestjs/common';
import { CryptModule } from 'src/crypt/crypt.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ChatbotsController } from './chatbots.controller';
import { ChatbotsService } from './chatbots.service';

@Module({
  imports: [PrismaModule, CryptModule],
  providers: [ChatbotsService],
  controllers: [ChatbotsController],
})
export class ChatbotsModule {}
