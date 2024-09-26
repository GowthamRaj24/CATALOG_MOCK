const addCompany = require('../controllers/admin/addCompany');
const blockCompany = require('../controllers/admin/blockCompany');
const verifyCompany = require('../controllers/admin/verifyCompany');

const express = require('express');
const routes = express.Router();
try{
routes
    .post('/addCompany' , addCompany)
    .post('/blockCompany' , blockCompany)
    .post('/verifyCompany' , verifyCompany);
}
catch(error){
    console.error("Admin \n"+error);
}
    

exports.route = routes;