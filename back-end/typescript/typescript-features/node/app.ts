import {createServer} from "node:http"

const server = createServer((req, res)=> {
    console.log(req.method);
    res.end("hello world")
})

server.listen(3000)