const http = require("http");

const server = http.createServer((req, res) => {
    console.log("User hit the server !");
    console.log(req.method)
    const url = req.url;
    if(url === '/')
    {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`
            <h1>
                Home page 
            </h1>`);
        res.end();
    }
    else
    {
        res.writeHead(404 , {"content-type": "text/html"})
        res.write(`
            <h1>
                Page not found
            </h1>            
            `)
        res.end();
    }

});

server.listen(5001, () => {
    console.log("server started");
});
  