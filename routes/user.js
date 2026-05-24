const express = require('express');
const {addUser} = require('../controllers/userController'); 
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.post('/', verifyToken, addUser);

module.exports = router; 
