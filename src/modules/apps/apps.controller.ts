import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppCreateInput } from 'src/@generated/app/app-create.input';
import { App } from 'src/@generated/app/app.model';
import { AppsService } from './apps.service';

@Controller({
  path: 'apps',
  version: '1',
})
export class AppsController {
  constructor(private appsService: AppsService) {}

  @Get()
  getApps(): Promise<App[]> {
    return this.appsService.getApps();
  }

  @Get(':appId')
  getApp(@Param('appId', new ParseIntPipe()) appId: number): Promise<App> {
    return this.appsService.getApp(appId);
  }

  @Post()
  createApp(@Body() data: AppCreateInput): Promise<App> {
    return this.appsService.createApp(data);
  }

  @Put(':appId')
  updateApp(
    @Param('appId', new ParseIntPipe()) appId: number,
    @Body() data: AppCreateInput,
  ): Promise<App> {
    return this.appsService.updateApp(appId, data);
  }
}
