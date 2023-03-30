const mongoose = require('mongoose').default
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require("./api/routes/routes");
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config({path: './config/.env'});
const mongoURI = process.env.MONGO_URI;

// Create a MongoDB Atlas database connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
    throw err;
});

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors())
app.use("",route)

app.listen(8083, function () {
    console.log('Listening to Port : 8083...');
    console.log(mongoURI)
})
