const express = require('express');// common js
const router = express.Router()



router.get('/', (req,res)=>{
    res.status(200).json({message: 'get jobs'})
})

router.post('/', (req,res)=>{
    res.status(200).json({message: 'post jobs'})
})

router.put('/:id', (req,res)=>{
    res.status(200).json({message: `edit jobs ${req.params.id}`})
})

router.delete('/:id', (req,res)=>{
    res.status(200).json({message: `delete jobs ${req.params.id}`})
})

module.exports = router