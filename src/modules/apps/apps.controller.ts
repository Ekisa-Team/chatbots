import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller({
  path: 'apps',
  version: '1',
})
export class AppsController {
  constructor(private appsService: AppsService) {}

  @Get()
  getApps(): Promise<any> {
    return null;
  }

  @Get(':appId')
  getApp(@Param('appId') appId: number): Promise<any> {
    return null;
  }

  @Post()
  createApp(): Promise<any> {
    return null;
  }
}
