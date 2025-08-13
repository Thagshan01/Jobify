import express from 'express';
import { changeJobApplicationStatus, changeJobVisibility, getCompanyData, getCompanyJobApplications, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';

const router = express.Router();

//register company
router.post('/register', registerCompany);

//company login
router.post('/login', loginCompany);

//get company data
router.get('/company', getCompanyData);

//post a job
router.post('/post-job', postJob);

//get applicants data of company
router.get('/applicants', getCompanyJobApplications);

//get company job list
router.get('/list-jobs', getCompanyPostedJobs);

//change application status
router.post('/change-status', changeJobApplicationStatus);

//change applications visibility
router.post('/change-visibility', changeJobVisibility);

export default router;