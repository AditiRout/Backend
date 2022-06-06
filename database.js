const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
const mongo=require('mongoose')
const stu=require('./models/student.js')

// mongo.connect("mongodb://localhost:27017/SocialMedia").then(()=>console.log("connected successfully"))

const connectDB= async(database)=>{
    try{
        await mongoose.connect(database)
        console.log('success')

    }
    catch(err){
        console.log("not working")
    }
}

connectDB('mongodb://localhost:27017/School')
                                                       
app.listen(5000,()=>
console.log('server started'))

