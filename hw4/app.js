const express = require('express');
const app = express();

import passport from 'passport';
app.use(passport.initialize());

import cookieParser from './middlewares/cookie-parser';
import queryParser from './middlewares/query-parser';

cookieParser({ app });
queryParser({ app });

import './middlewares/passport/passport';
import './middlewares/passport/passport-facebook';
import './middlewares/passport/passport-twitter';
import './middlewares/passport/passport-google';

import users from './routes/users';
import products from './routes/products';

app.use('/api/users', users)
app.use('/api/products', products);

import auth from './routes/auth';
app.use('/auth', auth);

module.exports = app;
