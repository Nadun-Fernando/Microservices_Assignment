const express = require('express');
const mysqlRoutes = require('./api/routes/sqlroutes');
const mongodbRoutes = require('./api/routes/mongoroutes');
const cors =require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(express.json());

app.use(mysqlRoutes);
app.use(mongodbRoutes);

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

// const PORT = process.env.PORT || 5002;
app.listen(8084, function () {
    console.log('Listening to Port : 8084...');
    // console.log()
})