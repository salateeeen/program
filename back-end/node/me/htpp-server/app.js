const http = require('http');
const url = require('url');
const port= 80;

const server = http.createServer((req, res) => {
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

server.listen(port, `localhost`, ()=>{
  console.log(`server is running on port ${port}`);
})

