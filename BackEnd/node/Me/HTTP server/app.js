const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(url.parse(req.url,true));
  const { query, pathname } = url.parse(req.url, true);

  /// routing
  if (pathname === `/`) {
    res.end(`you are the king`)
  }
  if (pathname === `/sultan`) {
    res.statusCode = 300
    res.end(`sultan is the king`)
  }
})

server.listen(4000, `localhost`)

