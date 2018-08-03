import passport from 'passport';
import { OAuthStrategy } from 'passport-google-oauth';
import { googleSecret, googleKey } from '../../config';

passport.use(new OAuthStrategy({
  consumerKey: googleKey,
  consumerSecret: googleSecret,
  callbackUrl: 'http://localhost:10000/auth/google/callback'
}, (token, tokenSecret, profile, done) => {
  done(null, profile);
}));