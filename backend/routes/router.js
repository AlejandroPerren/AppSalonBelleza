const express = require('express');
const { Register } = require('../controller/auth/register');
const { Login } = require('../controller/auth/login');
const { getServices } = require('../controller/services/getServices');
const { createServices } = require('../controller/services/createServices');
const { deleteServices } = require('../controller/services/deleteServices');
const { authenticateToken } = require('../middleware/authToken');


const router = express.Router();


//auth
router.post('/register', Register);
router.post('/login', Login);

//services
router.get('/services',authenticateToken, getServices)
router.post('/createServices',authenticateToken, createServices)
router.delete('/deleteService/:id',authenticateToken,deleteServices)



module.exports = router; 
