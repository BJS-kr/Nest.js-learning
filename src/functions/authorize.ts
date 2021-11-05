import * as fs from 'fs';
import { google } from 'googleapis';
import * as readline from 'readline';

const service = google.youtube('v3');
const OAuth2 = google.auth.OAuth2;
const scopes = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube.readonly',
];

const tokenDir =
  'C:\\Users\\BJS\\Desktop\\projects\\video-process\\.credentials';
const tokenPath = tokenDir + '/upload_app_session.json';

const storeToken = (token) => {
  if (!fs.existsSync(tokenDir)) fs.mkdirSync(tokenDir);
  fs.writeFile(tokenPath, JSON.stringify(token), (e) => {
    if (e) throw e;
    console.log('token stored');
  });
};

const getNewToken = (oauth2Client, cb) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
  console.log('auth url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oauth2Client.getToken(code, (e, token) => {
      if (e) throw new Error('토큰 발급 실패' + e);
      oauth2Client.credentials = token;
      storeToken(token);
      return cb(oauth2Client);
    });
  });
};

const authorize = (credentials, cb) => {
  const clientId = credentials.web.client_id;
  const clientSecret = credentials.web.client_secret;
  // json안에 redirectUrl이 없는데..? api를 다시 생성해야하나?;
  const redirectUrl = credentials.web.redirect_uris[0];
  const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  fs.readFile(tokenPath, (e, token) => {
    if (e) {
      return getNewToken(oauth2Client, cb);
    } else {
      oauth2Client.credentials = JSON.parse(token.toString());
      return cb(oauth2Client);
    }
  });
};

const uploadVideo = (auth) => {
  service.videos.insert(
    {
      auth: auth,
      part: ['snippet', 'contentDetails', 'status'],
      requestBody: {
        snippet: {
          title: 'My title',
          description: 'My description',
        },

        status: {
          privacyStatus: 'private',
        },
      },

      // Create the readable stream to upload the video
      media: {
        body: fs.createReadStream('temp/result.mp4'), // Change here to your real video
      },
    },
    (error, data) => {
      if (fs.existsSync('temp/result.mp4')) fs.unlinkSync('temp/result.mp4');
      if (error) {
        return console.log('error ocurred while uploading video! \n' + error);
      }
      return console.log(
        'upload succeeded!\n',
        'https://www.youtube.com/watch?v=' + data.data.id,
      );
    },
  );
};

const youtubeUpload = (cb1, cb2) => {
  fs.readFile('client_secret.json', async (e, d) => {
    if (e) {
      console.log('Error loading client secret file: ' + e);
      throw e;
    }
    await cb1(JSON.parse(d.toString()), cb2);
  });
  return 'youtubeUpload API Success!';
};

export { youtubeUpload, authorize, uploadVideo };
