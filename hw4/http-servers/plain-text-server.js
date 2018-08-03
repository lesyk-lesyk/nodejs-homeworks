const Http = require('http');

const server = Http.createServer();

server.on('request', (req, res) => {
  console.log(`incoming ${req.method} request ${req.url}`)
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World');
});

const port = process.env.PORT || 3000;
server.listen(port, () => { console.log(`Listening on port ${port}...`) });
