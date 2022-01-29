import { Controller, Get, Param, Post } from '@nestjs/common';
import { ChatbotsService } from './chatbots.service';

@Controller({
  path: 'chatbots/:appId/chatbots',
  version: '1',
})
export class ChatbotsController {
  constructor(private chatbotsService: ChatbotsService) {}

  @Get()
  getChatbots(@Param('appId') appId: number): Promise<any> {
    return null;
  }

  @Get(':chatbotId')
  getChatbot(@Param('appId') appId: number, @Param('chatbotId') chatbotId: number): Promise<any> {
    return null;
  }

  @Post()
  createChatbot(@Param('appId') appId: number): Promise<any> {
    return null;
  }
}
