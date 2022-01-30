import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TemplateMessage } from '@prisma/client';
import { TemplateMessageCreateInput } from 'src/@generated/template-message/template-message-create.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { TwilioStrategy } from 'src/strategies/channel/twilio.strategy';
import { TransportMessage } from 'src/types/transport-message.type';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class TemplateMessagesService {
  constructor(private prisma: PrismaService, private twilioStrategy: TwilioStrategy) {}

  async getMessages(appId: number, chatbotId: number): Promise<TemplateMessage[]> {
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

    return this.prisma.templateMessage.findMany({
      where: {
        chatbotId: {
          equals: chatbotId,
        },
      },
    });
  }

  async getMessage(appId: number, chatbotId: number, messageId: number): Promise<TemplateMessage> {
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

    return this.prisma.templateMessage.findFirst({
      where: {
        chatbotId,
        chatbot: { appId },
        id: messageId,
      },
    });
  }

  async configureMessage(
    appId: number,
    chatbotId: number,
    data: TemplateMessageCreateInput,
  ): Promise<TemplateMessage> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates chatbot existence
    const chatbot = await this.prisma.chatbot.findFirst({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.templateMessage.create({
      data: {
        ...data,
        chatbot: {
          connect: {
            id: chatbotId,
          },
        },
      },
    });
  }

  async updateMessage(
    appId: number,
    chatbotId: number,
    messageId: number,
    data: TemplateMessageCreateInput,
  ): Promise<TemplateMessage> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates chatbot existence
    const chatbot = await this.prisma.chatbot.findFirst({
      where: { id: chatbotId },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.templateMessage.update({
      data,
      where: {
        id: messageId,
      },
    });
  }

  async removeMessage(
    appId: number,
    chatbotId: number,
    messageId: number,
  ): Promise<TemplateMessage> {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates chatbot existence
    const chatbot = await this.prisma.templateMessage.findMany({
      where: {
        chatbotId,
        chatbot: { appId },
      },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    return this.prisma.templateMessage.delete({
      where: { id: messageId },
    });
  }

  async sendMessage(appId: number, chatbotId: number, messageId: number, data: SendMessageDto) {
    // Validates app existence
    const app = await this.prisma.app.findUnique({
      where: { id: appId },
    });
    if (!app) {
      throw new NotFoundException(`App wasn't found`);
    }

    // Validates chatbot existence
    const chatbot = await this.prisma.templateMessage.findFirst({
      where: {
        chatbotId,
        chatbot: { appId },
      },
    });
    if (!chatbot) {
      throw new NotFoundException(`Chatbot wasn't found`);
    }

    // Validates template message existence
    const templateMessage = await this.prisma.templateMessage.findFirst({
      where: {
        chatbotId,
        chatbot: { appId: appId },
        id: messageId,
      },
    });
    if (!templateMessage) {
      throw new NotFoundException(`Template message wasn't found`);
    }

    // Validates channel existence
    const channel = await this.prisma.channel.findFirst({
      where: {
        chatbotId,
        chatbot: { appId: appId },
      },
    });
    if (!channel) {
      throw new NotFoundException(
        `Channel hasn't been configured for ChatBot ${chatbotId} - App: ${appId}`,
      );
    }

    // Validates cellphone format
    if (!this.checkCellphoneFormat(channel.cellphone)) {
      throw new BadRequestException(
        `Sender's phone number is misconfigured; it must match the pattern: ^(whatsapp)(:\+)([0-9+])*$`,
      );
    }
    if (!this.checkCellphoneFormat(data.to)) {
      throw new BadRequestException(
        `Recipient's phone number is misconfigured; it must match the pattern: ^(whatsapp)(:\+)([0-9+])*$`,
      );
    }

    // Creates transport message
    const transport: TransportMessage = {
      accountSid: channel.accountSid,
      authToken: channel.authToken,
      from: channel.cellphone,
      to: data.to,
      body: this.processMessage(templateMessage.message, data.variables),
    };

    return this.twilioStrategy.sendMessage(transport);
  }

  private checkCellphoneFormat(cellphone: string): boolean {
    const pattern = /^(whatsapp)(:\+)([0-9+])*$/;
    return pattern.test(cellphone);
  }

  private processMessage(message: string, variables: Record<string, string>): string {
    let finalMessage = message;

    for (const variable in variables) {
      if (Object.prototype.hasOwnProperty.call(variables, variable)) {
        const value = variables[variable];
        const pattern = new RegExp(`{{${variable}}}`, 'g');
        finalMessage = finalMessage.replace(pattern, value);
      }
    }

    return finalMessage;
  }
}
