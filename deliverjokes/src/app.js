const express = require('express');
// const conn = require('./api/database/dbConnection')
const app = express();
const deliverroute = require('./api/routes/routes')
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use('', deliverroute);


app.listen(8082, function () {
    console.log('Listening to Port : 8082...');
})


