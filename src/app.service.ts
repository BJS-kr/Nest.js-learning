import { Injectable } from '@nestjs/common';
import { ffmpegConcat } from './functions/concat';
import { youtubeUpload, authorize, uploadVideo } from './functions/authorize';

@Injectable()
export class AppService {
  async ffmpeg(): Promise<string> {
    return (await ffmpegConcat()) || 'ffmpeg API Success!';
  }

  async youtubeUpload(): Promise<string> {
    return await youtubeUpload(authorize, uploadVideo);
  }
}
