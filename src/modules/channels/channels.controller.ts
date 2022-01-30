import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ChannelCreateInput } from 'src/@generated/channel/channel-create.input';
import { Channel } from 'src/@generated/channel/channel.model';
import { ChannelsService } from './channels.service';

@Controller({
  path: 'apps/:appId/chatbots/:chatbotId/channels',
  version: '1',
})
export class ChannelsController {
  constructor(private channelsService: ChannelsService) {}

  @Get()
  getChannels(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
  ): Promise<Channel[]> {
    return this.channelsService.getChannels(appId, chatbotId);
  }

  @Get(':channelId')
  getChannel(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Param('channelId', new ParseIntPipe()) channelId: number,
  ): Promise<Channel> {
    return this.channelsService.getChannel(appId, chatbotId, channelId);
  }

  @Post()
  linkChannel(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Body() data: any,
  ): Promise<Channel> {
    console.log(data);
    return this.channelsService.linkChannel(appId, chatbotId, data);
  }

  @Put(':channelId')
  updateChannel(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Param('channelId', new ParseIntPipe()) channelId: number,
    @Body() data: ChannelCreateInput,
  ): Promise<Channel> {
    return this.channelsService.updateChannel(appId, chatbotId, channelId, data);
  }

  @Delete(':channelId')
  unlinkChannel(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Param('chatbotId', new ParseIntPipe()) chatbotId: number,
    @Param('channelId', new ParseIntPipe()) channelId: number,
  ): Promise<Channel> {
    return this.channelsService.unlinkChannel(appId, chatbotId, channelId);
  }
}
