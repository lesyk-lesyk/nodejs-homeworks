import passport from 'passport';
import { Strategy } from 'passport-twitter';
import { twitterSecret, twitterKey } from '../../config';

passport.use(new Strategy({
  consumerKey: twitterKey,
  consumerSecret: twitterSecret,
  callbackUrl: 'http://localhost:10000/auth/twitter/callback'
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));