import passport from 'passport';
import { Strategy } from 'passport-local';
import { users } from '../../models/user/index';

passport.use('local', new Strategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  console.log(email, password);
  const user = users.getUser(email);

  if (!user || user.password !== password) {
    return done(null, false, {message: 'Incorrect email/password.'});
  }

  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.email)
});

passport.deserializeUser((email, done) => {
  const user = users.getUser(email);

  done(null, user);
});