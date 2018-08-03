const Http = require('http');
const fs = require('fs');

const server = Http.createServer();

server.on('request', (req, res) => {
  console.log(`incoming ${req.method} request ${req.url}`)
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.createReadStream('./index.html').pipe(res);
});

const port = process.env.PORT || 3000;
server.listen(port, () => { console.log(`Listening on port ${port}...`) });
