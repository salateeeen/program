const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on(`request`, (req, res) => {
  //? solution 1 
  // const readable = fs.createReadStream(`./texmt.txt`);
  // readable.on(`data`, (chunk) => {
  //   res.write(chunk)
  // })
  // readable.on(`end`, () => {
  //   res.end()
  // })
  // readable.on(`error`, (err) =>{
  //   res.statusCode = 404;
  //   console.log(err);
  //   res.end(`server not found`)
  // })
    //? solution 2
    const readable = fs.createReadStream(`./text.txt`)
    readable.pipe(res)
    //# readableSource.pipe(writeableDestination)
  })

  server.listen(4000, `localhost`)

