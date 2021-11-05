import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  hello() {
    return 'this is processing videos and uploading server for the test!';
  }
  @Get('video')
  async ffmpeg(): Promise<string> {
    return await this.appService.ffmpeg();
  }
  @Get('upload')
  async youtubeUpload(): Promise<string> {
    return await this.appService.youtubeUpload();
  }
}
