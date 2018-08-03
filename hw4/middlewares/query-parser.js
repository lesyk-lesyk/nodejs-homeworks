export default ({ app }) => {
  app.use((req, res, next) => {
    req.parsedQuery = req.query;
    next();
  });
};
