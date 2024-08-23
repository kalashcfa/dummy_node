const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    console.log("User hit the server !");
    res.write(`
    <h1>
        Home page 
    </h1>`);
    res.end();

});

server.listen(5001, () => {
    console.log("server started");
});
