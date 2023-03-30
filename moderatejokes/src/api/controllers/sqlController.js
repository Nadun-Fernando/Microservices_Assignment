const axios = require('axios');
const MYSQL_MICROSERVICE_URL = 'http://20.239.183.65:8082';
const conn = require('../../config/dbconnection')
const MD5 = require('md5');
async function addData(req, res) {
    try {
        const response = await axios.post(`${MYSQL_MICROSERVICE_URL}/create`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}

async function authenticate(req, res) {
    let { username,  password } = req.body;
    password = MD5(password);
    const sqlquery = 'SELECT * FROM users where username=(?) and password=(?)';
    conn.query(sqlquery, [username, password], function (error, result) {
        if (error) {
            throw error;
        }
        res.json(result)
        console.log(result);

    })
}

module.exports = { addData, authenticate };