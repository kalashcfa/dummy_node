// const fs = require("fs");
// const path = require("path");
// const filePath = path.join("./content", "bidtext.txt");
// const stream = fs.createReadStream(filePath, {
// //   encoding: "utf-8",
//   highWaterMark: 9000,
// });

// stream.on('data',(res)=>
// {
//     console.log(res)
// })

const http = require('http');
const path = require('path');
const fs =require('fs');

const filePath = path.join('./content','bidtext.txt');

http
    .createServer( (req, res)=>
    {
        // const text = fs.readFileSync(filePath , 'utf-8');
        // res.end(text);

        const fileStream = fs.createReadStream(filePath , 'utf-8');

        fileStream.on('open',()=>
        {
            fileStream.pipe(res)
        })
        fileStream.on('error',(err)=>
        {
            res.end('error:', err)
        })

    })
    .listen(5000 , ()=>
    {
        console.log(`server started at ${5000}`)
    })