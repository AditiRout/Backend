const express=require('express')
const router=express.Router()



router.get('/all',(req,res)=>{
    res.send('All Student')
})

router.post('/create',(req,res)=>{
    res.send('new student added')
})
router.delete('/delete',(req,res)=>{
    res.send('student deleted')
})
router.put('/update',(req,res)=>{
    res.send('student updated')
})

module.exports=router