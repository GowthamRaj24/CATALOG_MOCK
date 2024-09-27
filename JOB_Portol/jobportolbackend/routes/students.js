const express = require('express');
const routes = express.Router();

const applyForJob = require('../controllers/student/applyforJob');
const fetchAllJobs = require('../controllers/student/fetchAllJobs');
const fetchAppliedJob = require('../controllers/student/fetchAppliedJob');
const fetchCompanyJobs = require('../controllers/student/fetchCompanyJobs');
const fetchCompanyEmployees = require('../controllers/student/fetchCompanyEmployees');
const fetchJobById = require('../controllers/student/fetchJobById');

try{
routes
    .post('/applyForJob' , applyForJob)
    .post('/fetchAllJobs' , fetchAllJobs)
    .post('/fetchAppliedJobs' , fetchAppliedJob)
    .post('/fetchCompanyJobs' , fetchCompanyJobs)
    .post('/fetchCompanyEmployees' , fetchCompanyEmployees)
    .post('/fetchJobById' , fetchJobById);
}
catch(error){
    console.error("Student \n"+error);
}


exports.route = routes;