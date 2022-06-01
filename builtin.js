const os=require('os')
const user=os.userInfo();
console.log(user)
console.log(`system uptime is ${os.uptime()} secs`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)


const path=require('path')
console.log(path)
console.log(path.sep)
console.log('ba\\ho\\woo'.split(path.sep))
//const filePath=path.join('content','subfolder','text.txt')
const filePath=path.join('/content','/subfolder','text.txt')// '/' or '\' both works
console.log(filePath)
console.log(path.basename(filePath))
const absolute=path.resolve(__dirname,'/content','subfolder','text.txt')
console.log(absolute)

//sync file system

const{readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync('./content/result.txt',`${first + second}`)

console.log('done with this task')
console.log('starting the next one')
