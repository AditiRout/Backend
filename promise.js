//async and promise together to prevent nested callbacks

const { rejects } = require("assert")
const {readFile} = require("fs")
const { resolve } = require("path")

const getText=(path)=>{
    return new Promise((resolve,Reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                Reject(err)
            }
            else{
                resolve(data)
            }
        })

    })
}

getText('./content/first.txt').then(
    (data)=>{
        console.log(data)
    }
)

getText('./content/first.txt').catch(err=>console.log(err))

//instead of then can write

const start=async()=>{
    try{
        const first= await getText("./content/first.txt")
        const sec=await getText('./content/second.txt')
        console.log(first)
        console.log(sec)
    }
    catch(error){
        console.log(error)
    }
}

start()