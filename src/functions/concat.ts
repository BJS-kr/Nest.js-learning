import * as concat from 'ffmpeg-concat';
import * as fs from 'fs';
import * as path from 'path';

const ffmpegConcat = async () => {
  const pwd = 'C:\\Users\\BJS\\Desktop\\projects\\video-process\\';
  const source = path.resolve('source');
  const temp = pwd + 'temp';
  if (!fs.existsSync(temp)) fs.mkdirSync(temp, { recursive: true });
  try {
    await concat({
      output: temp + '/result.mp4',
      videos: [source + '/1.mp4', source + '/2.mp4', source + '/3.mp4'],
      transitions: [
        {
          name: 'circleOpen',
          duration: 2000,
        },
        {
          name: 'squaresWire',
          duration: 2000,
        },
      ],
      audio: source + '/Sample_BGM.mp3',
      log: console.log,
    });
  } catch (e) {
    console.error(e);
    return 'ffmpeg API Fail!';
  }
};

export { ffmpegConcat };
