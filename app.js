//console.log(__dirname);
//setInterval(function(){console.log('hello')},1000);
//console.log(module)
//const v=require('./names.js')
//console.log(v)
//v.x(v.john)
//require('./directaccess')

const express=require('express')
const app=express()
const {people}=require('./mongo.js')

app.listen(5000,()=>{

    console.log('server at 5000..')
})

app.get('/api/people',(req,res)=>{
    res.json({success:true,data:people})
})
