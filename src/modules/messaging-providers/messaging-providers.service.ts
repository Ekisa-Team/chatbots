import { Injectable } from '@nestjs/common';
import { MessagingProviderCreateInput } from 'src/@generated/messaging-provider/messaging-provider-create.input';
import { MessagingProvider } from 'src/@generated/messaging-provider/messaging-provider.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagingProvidersService {
  constructor(private prisma: PrismaService) {}

  getProvider(): Promise<MessagingProvider[]> {
    return this.prisma.messagingProvider.findMany();
  }

  createProvider(data: MessagingProviderCreateInput): Promise<MessagingProvider> {
    return this.prisma.messagingProvider.create({ data });
  }
}
