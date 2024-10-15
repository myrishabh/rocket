const express = require('express');
const appRoute = express.Router();
const userRoute = require('../controllers/UserController');

appRoute.get('/getUser', userRoute.getUsers);
appRoute.post('/postData', userRoute.postData);


module.exports = appRoute