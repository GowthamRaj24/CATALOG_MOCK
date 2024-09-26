const express = require('express');
const routes = express.Router();

const applyForJob = require('../controllers/student/applyforJob');
const fetchAllJobs = require('../controllers/student/fetchAllJobs');
const fetchAppliedJob = require('../controllers/student/fetchAppliedJob');
const fetchCompanyJobs = require('../controllers/student/fetchCompanyJobs');
const fetchCompanyEmployees = require('../controllers/student/fetchCompanyEmployees');

try{
routes
    .post('/applyForJob' , applyForJob)
    .post('/fetchAllJobs' , fetchAllJobs)
    .post('/fetchAppliedJobs' , fetchAppliedJob)
    .post('/fetchCompanyJobs' , fetchCompanyJobs)
    .post('/fetchCompanyEmployees' , fetchCompanyEmployees)
}
catch(error){
    console.error("Student \n"+error);
}


exports.route = routes;