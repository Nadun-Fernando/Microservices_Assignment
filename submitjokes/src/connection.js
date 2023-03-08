const mongoose = require('mongoose').default
const express = require('express');
const app = express();

const body_parser = require('body-parser')
const bodyParser = require("body-parser");

const url = "mongodb+srv://Nadun:Birthday16@cluster0.gezfpl9.mongodb.net/?retryWrites=true&w=majority";
const urlencodedParser = bodyParser.urlencoded({extended: false});

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err)
    }
}

connect();

app.listen(8082, function () {
    console.log('Listening to Port : 8082...');
})