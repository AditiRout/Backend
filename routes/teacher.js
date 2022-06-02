const express=require('express')
const router=express.Router()



router.get('/all',(req,res)=>{
    res.send('All teacher')
})

router.post('/create',(req,res)=>{
    res.send('new teacher added')
})
router.delete('/delete',(req,res)=>{
    res.send('teacher deleted')
})
router.put('/update',(req,res)=>{
    res.send('teacher updated')
})

module.exports=router