const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<html><body><body style="background-color: pink; color: blue"><h1>Móóóój jest ten kawalek kompuszka!</h1></body></body></html>');
}

const server = http.createServer(requestListener);
server.listen(port);