const event=require('events')
const eventEmitter=new event();

eventEmitter.on('start',()=>{
    console.log("hello the system will start now")
})

eventEmitter.on('start',(name,id)=>{
    console.log(`data received name:${name} and id:${id}`)
})

//order matters
eventEmitter.emit('start','deepu',23)
//first is string and then rest arguements if needed

const http= require('http')
const server=http.createServer();

server.on('request',(req,res)=>{
    res.end("hello world")
})

server.listen(5000)