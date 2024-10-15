const express = require('express');
const app = express();
const routes = require('./routes/index')
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.use('/', routes)

app.listen(4000, function(err, result){
    console.log("server is running on Port:",4000);
})