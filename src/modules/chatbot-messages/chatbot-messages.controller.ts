import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ChatbotMessagesService } from './chatbot-messages.service';

@Controller({
  path: 'apps/:appId/chatbots/:chatbotId/messages',
  version: '1',
})
export class ChatbotMessagesController {
  constructor(private chatbotMessagesService: ChatbotMessagesService) {}

  @Get()
  getMessages(@Param('appId') appId: number, @Param('chatbotId') chatbotId: number): Promise<any> {
    return null;
  }

  @Get(':messageId')
  getMessage(
    @Param('appId') appId: number,
    @Param('chatbotId') chatbotId: number,
    @Param('messageId') messageId: number,
  ): Promise<any> {
    return null;
  }

  @Post()
  configureMessage(
    @Param('appId') appId: number,
    @Param('chatbotId') chatbotId: number,
  ): Promise<any> {
    return null;
  }

  @Delete(':messageId')
  removeMessage(
    @Param('appId') appId: number,
    @Param('chatbotId') chatbotId: number,
    @Param('messageId') messageId: number,
  ): Promise<any> {
    return null;
  }

  @Post(':messageId/send')
  sendMessage(
    @Param('appId') appId: number,
    @Param('chatbotId') chatbotId: number,
    @Param('messageId') messageId: number,
  ): Promise<any> {
    console.log({ appId, chatbotId, messageId });
    return this.chatbotMessagesService.sendMessage();
  }
}
