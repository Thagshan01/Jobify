import express from 'express'
import { getJobs } from '../controllers/jobController.js'

const router = express.Router()

//Route to get all jobs data
router.get('/', getJobs)

//Route to get a single job by Id
router.get('/:id', getJobById)

export default router;