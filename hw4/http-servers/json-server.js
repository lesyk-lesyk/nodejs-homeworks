const Http = require('http');

const server = Http.createServer();

server.on('request', (req, res) => {
  console.log(`incoming ${req.method} request ${req.url}`)
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  const product = {
    id: 1,
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    options: [
      { color: 'blue' },
      { size: 'XL' }
    ]
  };
  res.end(JSON.stringify(product));
});

const port = 3000;
server.listen(port, () => { console.log(`Listening on port ${port}...`) });
