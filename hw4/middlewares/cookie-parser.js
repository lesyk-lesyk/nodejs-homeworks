import cookieParser from 'cookie-parser';

export default ({ app }) => {
  app.use(cookieParser());

  app.use((req, res, next) => {
    req.parsedCookies = Object.assign({}, req.cookies);
    next();
  });
};
