const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
const mongo=require('mongoose')
const stu=require('./models/student.js')
require('dotenv').config()
// mongo.connect(MONGO_URL).then(()=>console.log("connected successfully"))

const connectDB= async(database)=>{
    try{
        await mongoose.connect(database)
        console.log('success')

    }
    catch(err){
        console.log("not working")
    }
}

connectDB(`${process.env.MONGO_URL}`)
                                                       
app.listen(5000,()=>
console.log('server started'))

