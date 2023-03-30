const axios = require('axios');
const Joke = require("../../../../submitjokes/src/api/models/models");
const MONGODB_MICROSERVICE_URL = 'http://104.208.80.87:8083';
const cors = require('cors')

async function readData(req, res) {
    try {
            const response = await axios.get(`${MONGODB_MICROSERVICE_URL}/get`);
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response.status).json(error.response.data);
        }
}

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

module.exports = { readData, updateData, deleteData };