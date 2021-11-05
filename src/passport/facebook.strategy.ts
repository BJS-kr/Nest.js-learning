import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3000/facebook/auth/callback',
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    const { name, emails, provider } = profile;
    const user = {
      id: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      provider,
    };
    console.log(user);
    return user;
  }
}
