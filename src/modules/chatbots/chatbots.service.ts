import { Injectable, NotFoundException } from '@nestjs/common';
import { Chatbot } from 'src/@generated/chatbot/chatbot.model';
import { CryptService } from 'src/crypt/crypt.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatbotsService {
  constructor(private prisma: PrismaService, private crypt: CryptService) {}

  async getChatbots(appId: number): Promise<Chatbot[]> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    return this.prisma.chatbot.findMany({ where: { appId } });
  }

  async getChatbot(appId: number, chatbotId: number): Promise<Chatbot> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    return this.prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
  }

  async createChatbot(appId: number): Promise<Chatbot> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Creates chatbot
    const chatbot = await this.prisma.chatbot.create({
      data: {
        appId,
        accessKey: '',
      },
    });

    // Generates access key and updates record
    const accessKey = await this.crypt.generateAccessKey(appId, chatbot.id);
    const updatedChatbot = await this.prisma.chatbot.update({
      data: { accessKey },
      where: { id: chatbot.id },
    });

    return updatedChatbot;
  }

  async deleteChatbot(appId: number, chatbotId: number): Promise<Chatbot> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates chatbot existence
    const chatbot = await this.prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.chatbot.delete({
      where: { id: chatbotId },
    });
  }
}
