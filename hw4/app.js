const express = require('express');
const app = express();

import cookieParser from './middlewares/cookie-parser';
import queryParser from './middlewares/query-parser';

cookieParser({ app });
queryParser({ app });

import users from './routes/users';
import products from './routes/products';

app.use('/api/users', users)
app.use('/api/products', products);

module.exports = app;