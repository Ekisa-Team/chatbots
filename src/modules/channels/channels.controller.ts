import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller({
  path: 'chatbots/:appId/chatbots/:chatbotId/channels',
  version: '1',
})
export class ChannelsController {
  constructor(private channelsService: ChannelsService) {}

  @Get()
  getChannels(@Param('appId') appId: number, @Param('chatbotId') chatbotId: number): Promise<any> {
    return null;
  }

  @Get(':channelId')
  getChannel(
    @Param('appId') appId: number,
    @Param('chatbotId') chatbotId: number,
    @Param('channelId') channelId: number,
  ): Promise<any> {
    return null;
  }

  @Post()
  linkChannel(@Param('appId') appId: number, @Param('chatbotId') chatbotId: number): Promise<any> {
    return null;
  }

  @Delete(':channelId')
  unlinkChannel(
    @Param('appId') appId: number,
    @Param('chatbotId') chatbotId: number,
    @Param('channelId') channelId: number,
  ): Promise<any> {
    return null;
  }
}
