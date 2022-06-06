

const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,max:56,min:18},
    fees:{type:mongoose.Decimal128,required:true,validate:v=>v>=5500.50},
    hobbies:{type:Array},
    isActive:{type:Boolean},
    comments:[{value:{type:String},publish:{type:Date,default:Date.now}}],
    join:{type:Date,default:Date.now}


})
console.log(studentSchema.path('age'))

const studentModel=mongoose.model('student',studentSchema)