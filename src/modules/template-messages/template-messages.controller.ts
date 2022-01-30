import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TemplateMessageCreateInput } from 'src/@generated/template-message/template-message-create.input';
import { TemplateMessage } from 'src/@generated/template-message/template-message.model';
import { SendMessageDto } from './dto/send-message.dto';
import { TemplateMessagesService } from './template-messages.service';

@Controller({
  path: 'apps/:appId/chatbots/:chatbotId/template_messages',
  version: '1',
})
export class TemplateMessagesController {
  constructor(private templateMessagesService: TemplateMessagesService) {}

  @Get()
  getMessages(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
  ): Promise<TemplateMessage[]> {
    return this.templateMessagesService.getMessages(appId, chatbotId);
  }

  @Get(':messageId')
  getMessage(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Param('messageId', new ParseIntPipe()) messageId: number,
  ): Promise<TemplateMessage> {
    return this.templateMessagesService.getMessage(appId, chatbotId, messageId);
  }

  @Post()
  configureMessage(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Body() data: TemplateMessageCreateInput,
  ): Promise<TemplateMessage> {
    return this.templateMessagesService.configureMessage(appId, chatbotId, data);
  }

  @Put(':messageId')
  updateMessage(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Param('messageId', new ParseIntPipe()) messageId: number,
    @Body() data: TemplateMessageCreateInput,
  ): Promise<TemplateMessage> {
    return this.templateMessagesService.updateMessage(appId, chatbotId, messageId, data);
  }

  @Delete(':messageId')
  removeMessage(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Param('messageId', new ParseIntPipe()) messageId: number,
  ): Promise<TemplateMessage> {
    return this.templateMessagesService.removeMessage(appId, chatbotId, messageId);
  }

  @Post(':messageId/send')
  sendMessage(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Param('messageId', new ParseIntPipe()) messageId: number,
    @Body() data: SendMessageDto,
  ): Promise<any> {
    console.log(data);
    return this.templateMessagesService.sendMessage(appId, chatbotId, messageId, data);
  }
}
