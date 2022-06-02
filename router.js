const express = require('express');
const req = require('express/lib/request');
const stu=require('./routes/students.js')
const tea=require('./routes/teacher.js')

const app=express();
app.use('/student',stu)
app.use('/teacher',tea)

app.listen(5000,()=>{
    console.log('server started at 5000..')
})

app.get('api/v1/query',(req,res)=>{
    console.log(req.query)
    res.send('hello world')
})