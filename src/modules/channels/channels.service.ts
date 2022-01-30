import { Injectable, NotFoundException } from '@nestjs/common';
import { ChannelCreateInput } from 'src/@generated/channel/channel-create.input';
import { Channel } from 'src/@generated/channel/channel.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChannelsService {
  constructor(private prisma: PrismaService) {}

  async getChannels(appId: number, chatbotId: number): Promise<Channel[]> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates app existence
    const chatbot = await this.prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.channel.findMany({
      where: { chatbotId },
    });
  }

  async getChannel(appId: number, chatbotId: number, channelId: number): Promise<Channel> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates app existence
    const chatbot = await this.prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.channel.findUnique({
      where: { id: channelId },
    });
  }

  async linkChannel(appId: number, chatbotId: number, data: ChannelCreateInput): Promise<Channel> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates app existence
    const chatbot = await this.prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.channel.create({
      data: {
        ...data,
        chatbot: {
          connect: { id: chatbotId },
        },
      },
    });
  }

  async updateChannel(
    appId: number,
    chatbotId: number,
    channelId: number,
    data: ChannelCreateInput,
  ): Promise<Channel> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates app existence
    const chatbot = await this.prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.channel.update({
      data,
      where: { id: channelId },
    });
  }

  async unlinkChannel(appId: number, chatbotId: number, channelId: number): Promise<Channel> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates app existence
    const chatbot = await this.prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.channel.delete({
      where: { id: channelId },
    });
  }
}
