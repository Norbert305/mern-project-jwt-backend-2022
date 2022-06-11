
const asyncHandler = require('express-async-handler')

//get jobs
//route get /api/jobs
//@access private
const getJobs = asyncHandler (async(req,res) =>{
    if (req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'get jobs'})
})
//post jobs
//route post /api/jobs
//@access private
const postJob =  asyncHandler (async(req,res) =>{
    res.status(200).json({message: 'post jobs'})
})
//put jobs
//route put /api/jobs/:id
//@access private
const editJob = asyncHandler (async (req,res) =>{
    res.status(200).json({message: `edit jobs ${req.params.id}`})
})
//delete jobs
//route delete /api/jobs/:id
//@access private
const deleteJob = asyncHandler (async(req,res) =>{
    res.status(200).json({message: `delete jobs ${req.params.id}`})
})


module.exports = {
    getJobs,
    postJob,
    editJob,
    deleteJob
}