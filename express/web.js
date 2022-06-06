
// const http=require('http')
// const {readFileSync}=require('fs')
// const home=readFileSync('./express/index.html')


// const server=http.createServer((req,res)=>{
//     //console.log(req.method)
//     //console.log(req.url)
//     res.writeHead(200,{'content-type':'text/html'})
//     //res.write('<h1>header</h1>')
//     res.write(home)
//     res.end()
// })

// server.listen(5000)
const express=require('express')
const router=express.Router()
const app=express();

const {homy}=require('../homeControl')
const res = require('express/lib/response')
const { route } = require('express/lib/application')
app.get('/',homy)
//set up directory where template files used
app.use(express.static('./public'))
app.set('views','./views')
app.set('view engine','ejs')
app.listen(5000,()=>{
    console.log('runn')
})

