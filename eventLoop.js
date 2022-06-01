const {readFile}=require("fs")

console.log("starting first task")

readFile("./content/first.txt","utf8",(err,result)=>{
    if(err){
        console.log("error")
        return
    }
    console.log(result)
    console.log("first task completed")

})

console.log("next task pls")

//set interval //set timeout