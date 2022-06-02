
const http=require('http')
const {readFileSync}=require('fs')
const home=readFileSync('./express/index.html')


const server=http.createServer((req,res)=>{
    //console.log(req.method)
    //console.log(req.url)
    res.writeHead(200,{'content-type':'text/html'})
    //res.write('<h1>header</h1>')
    res.write(home)
    res.end()
})

server.listen(5000)