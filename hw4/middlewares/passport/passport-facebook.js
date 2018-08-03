import passport from 'passport';
import { Strategy } from 'passport-facebook';
import { facebookSecret, facebookKey } from '../../config';

passport.use(new Strategy({
  clientID: facebookKey,
  clientSecret: facebookSecret,
  callbackURL: 'http://local.foo.com'
}, (token, tokenSecret, profile, done) => {
  done(null, profile);
}));