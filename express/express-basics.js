const express=require('express')
const app=express()
const path=require('path')
const { nextTick } = require('process')

//app.get,app.post,app.put,app.delete,app.all



app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./express/index.html'))
})
app.get('/about',(req,res)=>{
    res.send('about page')
})

//app.all('*',(req,res)=>{
  //res.send('resource not found')
//})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})


const cb1=(req,res,next)=>{
    console.log('first trial')
    next()
}
const cb2=(req,res,next)=>{
    console.log('second trial')
    next()
}

const cb3=(req,res)=>{
    console.log('third trial')
    res.send('helo pingu')
    next()
}

app.get(/a/,[cb1,cb2,cb3])


