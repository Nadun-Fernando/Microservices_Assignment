const axios = require('axios');
const Joke = require("../../../../submitjokes/src/api/models/models");
const MONGODB_MICROSERVICE_URL = 'http://127.0.0.1:8083';

async function readData(req, res) {
    try {
            const response = await axios.get(`${MONGODB_MICROSERVICE_URL}/get`);
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response.status).json(error.response.data);
        }
}

// async function createData(req, res) {
//     const { content, type } = req.body;
//
//     // Create a new joke object based on the request body
//     const newJoke = new Joke({
//         content,
//         type
//     });
//
//     try {
//         const response = await axios.get(`${MONGODB_MICROSERVICE_URL}/post`, newJoke);
//         res.status(response.status).json(response.data);
//     } catch (error) {
//         res.status(error.response.status).json(error.response.data);
//     }
// }

async function updateData(req, res) {
    const { content, type } = req.body;
    const id  = req.params.id;

    try {
            const response = await axios.put(`${MONGODB_MICROSERVICE_URL}/modify` + id, {content, type}, {new: true});
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response.status).json(error.response.data);
        }
}

async function deleteData(req, res) {
    const id = req.params.id;
    try {
            const response = await axios.delete(`${MONGODB_MICROSERVICE_URL}/delete` + id);
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response.status).json(error.response.data);
        }
}

module.exports = { readData,createData, updateData, deleteData };