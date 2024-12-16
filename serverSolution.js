const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = process.env.PORT || 3000; // Use a different port if 8080 is unavailable

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//Additional solutions might involve checking the firewall settings or ensuring the server is not behind a NAT that needs port forwarding.