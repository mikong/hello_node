var http = require('http');

http.createServer(function (req, res) {
  console.log('Saying hello...');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(6000, '127.0.0.1');
