const express = require('express');// common js
const router = express.Router()
const {getJobs, postJob, editJob, deleteJob} =  require('../controllers/jobController')



//router.route('/).get(getJobs).post(setJob)-------could use
//router.route('/:id).delete(getJobs).put(editJob)-----

router.get('/', getJobs)
router.post('/', postJob)
router.put('/:id', editJob)
router.delete('/:id', deleteJob)

module.exports = router