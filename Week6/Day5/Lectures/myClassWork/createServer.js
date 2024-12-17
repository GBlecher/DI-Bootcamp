const http = require('http')


const server = http.createServer((req,res)=> {
    res.end("hello from my server")
    console.log(req.url)
    console.log(req.method)
})

server.listen(5000)


