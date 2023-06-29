const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<html><body><h1>Móóóój jest ten kawalek kompuszka!</h1></body></html>');
}

const server = http.createServer(requestListener);
server.listen(port);