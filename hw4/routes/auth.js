var express = require('express');
import passport from 'passport';
var router = express.Router();

import { jwtSecret } from '../config';

router.post('/', (req, res) => {
  const user = users.getUser(req.body.email);

  if (!user || user.password !== req.body.password) {
    res.status(404).send({ code: 404, message: 'Not found' });
  } else {
    const payload = { 'email': user.email };
    const token = jwt.sign(payload, jwtSecret);

    res.status(200).json({
      code: 200,
      message: 'OK',
      data: {
        user
      },
      token
    });
  }
});

router.post('/local', passport.authenticate('local'), (req, res) => {
  res.status(200).send('authentication successful');
});

router.get('/success', (req, res) => {
  res.status(200).send('authentication successful');
});

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/local'
}));

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/local'
}));

router.get('/google', passport.authenticate('google', {
  scope: 'https://www.google.com/m8/feeds'
}));
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/local'
}));

module.exports = router
