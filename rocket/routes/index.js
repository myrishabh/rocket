const express = require('express');
const app = express();

const userRoutes = require('./userRoute');

app.use('/user', userRoutes);

module.exports = app;
