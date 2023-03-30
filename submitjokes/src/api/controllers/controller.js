const Joke = require('../models/models')

const axios = require('axios');
const MYSQL_MICROSERVICE_URL = 'http://127.0.0.1:8082';
// Define the endpoint for submitting a new joke
async function submit(req, res) {
    const { content, type } = req.body;

    // Create a new joke object based on the request body
    const newJoke = new Joke({
        content,
        type
    });

    // Save the new joke to the database
    newJoke.save().then((joke) => {
        console.log('New joke added to the database');
        res.json(joke);
    }).catch((err) => {
        console.log('Error adding new joke to the database');
        throw err;
    });
}

async function getAll(req, res) {
    try {
        const jokes = await Joke.find().exec();
        console.log('All Jokes has been Displayed');
        res.json(jokes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

async function update(req, res) {
    const { content, type } = req.body;
    const id  = req.params.id;

    try {
        const joke = await Joke.findByIdAndUpdate(id, { content, type }, { new: true });

        if (!joke) {
            return res.status(404).json({ message: "Joke not found" });
        }
        console.log('Joke updated successfully');
        return res.json({
            message: "Joke Updated",
            updatedJoke: joke
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}

async function deleteJoke(req, res) {
    try {
        const joke = await Joke.findByIdAndDelete(req.params.id).exec();
        if (!joke) {
            return res.status(404).json({ message: "Joke not found" });
        }
        console.log('Joke deleted from the database');
        return res.json({
            message: "Joke deleted",
            deletedJoke: joke
        });
    } catch (err) {
        console.log('Error deleting joke from the database');
        return res.status(500).json({
            message: "Error deleting joke",
            error: err
        });
    }
}

async function getTypes(req, res) {
    try {
        const response = await axios.get(`${MYSQL_MICROSERVICE_URL}/gettype`);
        console.log(response);
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}

module.exports = {
    submit,
    getAll,
    update,
    deleteJoke,
    getTypes
}
