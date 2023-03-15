const mongoose = require('mongoose')

// Define the joke schema
const JokeSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;