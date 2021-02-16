var http = require('http');

http.createServer(function (req, res) {
  res.write("Jsi LLLLLLL");
  res.end();
}).listen(8080);