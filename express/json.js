const express=require('express')
const app=express()

app.listen(5000,()=>{
    console.log('runnning')

})
app.get('/',(req,res)=>{
    const newP=p.map((p)=>{
        const {id,name}=p;
        return id,name
    })
    res.json(newP)
})