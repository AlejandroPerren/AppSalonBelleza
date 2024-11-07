const express = require('express');
const { Register } = require('../controller/auth/register');
const { Login } = require('../controller/auth/login');
const { getServices } = require('../controller/services/getServices');
const { createServices } = require('../controller/services/createServices');
const { deleteServices } = require('../controller/services/deleteServices');
const userLogout = require('../controller/auth/logout');
const { authToken } = require('../middleware/verifyToken');
const router = express.Router();


//auth
router.post('/register', Register);
router.post('/login', Login);
router.get('/userLogout', userLogout)

//services
router.get('/services',authToken, getServices)
router.post('/createServices',authToken, createServices)
router.delete('/deleteService/:id',authToken,deleteServices)

module.exports = router; 
