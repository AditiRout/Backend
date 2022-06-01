const{readFile,writeFile}=require('fs')
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const start=async()=>{
    try{
        const first=await readFilePromise('./content/first.txt','utf8')
        const sec=await readFilePromise('./content/second.txt')
        console.log(first+sec)
        await writeFilePromise('./content/result.txt',`the new string is ${first+sec}`,{flag:'a'})
    }
    catch(error){
        console.log(error)

    }
}
start()