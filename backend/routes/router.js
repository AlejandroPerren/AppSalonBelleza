const express = require('express');
const { Register } = require('../controller/auth/register');
const { Login } = require('../controller/auth/login');
const { getServices } = require('../controller/services/getServices');
const { createServices } = require('../controller/services/createServices');
const { deleteServices } = require('../controller/services/deleteServices');
const { updateServices } = require('../controller/services/updateServices');
const router = express.Router();


//auth
router.post('/register', Register);
router.post('/login', Login);

//services
router.get('/services', getServices)
router.post('/createServices', createServices)
router.delete('/deleteService/:id',deleteServices)
router.patch('/updateService/:id', updateServices)

module.exports = router; 
