//console.log(__dirname);
//setInterval(function(){console.log('hello')},1000);
//console.log(module)
//const v=require('./names.js')
//console.log(v)
//v.x(v.john)
//require('./directaccess')
const dotenv=require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')
const express=require('express')
const app=express()
const {people}=require('./mongo.js')
const pt=process.env.PORT
app.listen(pt,()=>{

    console.log('server at 8000..')
})
app.get('/',(req,res)=>{
    res.send('hello moto')
})

app.post('/api/people',(req,res)=>
{
    console.log(req.body)
    const{name}=req.body//name comes from html file in form action
    if(!name){
        res.send("please enter a name")
    }else{
        res.status(200).json({succes:true,person :name})
       // const pp=name
        //people.push({name:pp,id:6})
    }
})

app.get('/api/people',(req,res)=>{
    res.json({success:true,data:people})
})
const {home}=require('./homeControl.js')


app.use(cookieParser())
app.get('/setcookies',home.get_cookie)
