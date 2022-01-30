import { Injectable } from '@nestjs/common';
import { AppCreateInput } from 'src/@generated/app/app-create.input';
import { App } from 'src/@generated/app/app.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppsService {
  constructor(private prisma: PrismaService) {}

  getApps(): Promise<App[]> {
    return this.prisma.app.findMany();
  }

  getApp(appId: number): Promise<App> {
    return this.prisma.app.findUnique({
      where: { id: appId },
    });
  }

  createApp(data: AppCreateInput): Promise<App> {
    return this.prisma.app.create({ data });
  }

  updateApp(appId: number, data: AppCreateInput): Promise<App> {
    console.log(appId, data);
    return this.prisma.app.update({
      data,
      where: { id: appId },
    });
  }
}
