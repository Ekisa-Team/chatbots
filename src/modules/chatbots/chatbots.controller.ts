import { Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Chatbot } from 'src/@generated/chatbot/chatbot.model';
import { ChatbotsService } from './chatbots.service';

@Controller({
  path: 'apps/:appId/chatbots',
  version: '1',
})
export class ChatbotsController {
  constructor(private chatbotsService: ChatbotsService) {}

  @Get()
  getChatbots(@Param('appId', new ParseIntPipe()) appId: number): Promise<Chatbot[]> {
    return this.chatbotsService.getChatbots(appId);
  }

  @Get(':chatbotId')
  getChatbot(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
  ): Promise<Chatbot> {
    return this.chatbotsService.getChatbot(appId, chatbotId);
  }

  @Post()
  createChatbot(@Param('appId', new ParseIntPipe()) appId: number): Promise<Chatbot> {
    return this.chatbotsService.createChatbot(appId);
  }

  @Delete(':chatbotId')
  deleteChatbot(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
  ): Promise<Chatbot> {
    return this.chatbotsService.deleteChatbot(appId, chatbotId);
  }
}
