const { readFileSync } = require("fs");
const { createServer } = require("http");
const { renderToString } = require("react-dom/server");
const url = require("url");
const React = require("react");

const htmlTemplate = readFileSync("./index.html", "utf8");
const clientJS = readFileSync("./client.js", "utf8");

function Home() {
    return (
        <div>
            <h1>Sultan Omar</h1>
            <div>is the best</div>
        </div>
    );
}

const server = createServer((req, res) => {
    const pathname = url.parse(req.url, true).pathname;

    if (pathname === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html",
        });

        const renderedReact = renderToString(<Home />);

        res.end(
            htmlTemplate.replace("%%%content%%%", renderedReact)
        );
    } else if (pathname === "/client.js") {
        res.writeHead(200, {
            "Content-Type": "application/javascript",
        });

        res.end(clientJS);
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(8000, () => {
    console.log("Listening on 8000");
});