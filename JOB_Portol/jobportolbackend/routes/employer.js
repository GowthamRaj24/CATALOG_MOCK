const addJobPosting = require('../controllers/employer/addJobPosting');
const deleteJobPosting = require('../controllers/employer/deleteJobPosting');
const fetchApplicants = require('../controllers/employer/fetchApplicants');
const updateJobPosting = require('../controllers/employer/updateJobPosting');
const fetchMyPostings = require('../controllers/employer/fetchMyPostings');

const express = require('express');
const routes = express.Router();

try{
routes
    .post('/addJobPosting' , addJobPosting)
    .post('/deleteJobPosting' , deleteJobPosting)
    .post('/fetchApplicants' , fetchApplicants)
    .post('/fetchMyPostings' , fetchMyPostings)
    .post('/updateJobPosting' , updateJobPosting);
}
catch(error){
    console.error("Employer \n"+error);
}

exports.route = routes;