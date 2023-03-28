const axios = require('axios');
const MYSQL_MICROSERVICE_URL = 'http://127.0.0.1:8082';

async function addData(req, res) {
    try {
        const response = await axios.post(`${MYSQL_MICROSERVICE_URL}/add`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}

module.exports = { addData };