// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
}

interface ApiGroup {
  group: string;
  description: string;
  routes: ApiEndpoint[];
}

interface WelcomeResponse {
  message: string;
  baseUrl: string;
  endpoints: ApiGroup[];
  note: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): WelcomeResponse {
    return this.appService.getHello();
  }
}
