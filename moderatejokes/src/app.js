// const express = require('express');
// const axios = require('axios');
//
// const app = express();
// app.use(express.json());
//
// const MYSQL_MICROSERVICE_URL = 'http://127.0.0.1:8082';
// const MONGODB_MICROSERVICE_URL = 'http://127.0.0.1:8083';
//
// // Assuming the MySQL microservice has an endpoint for updating data
// app.post('/update_mysql', async (req, res) => {
//     try {
//         const response = await axios.post(`${MYSQL_MICROSERVICE_URL}/update`, req.body);
//         res.status(response.status).json(response.data);
//     } catch (error) {
//         res.status(error.response.status).json(error.response.data);
//     }
// });
//
// // Assuming the MongoDB microservice has endpoints for reading, updating, and deleting data
// app.route('/access_mongodb')
//     .get(async (req, res) => {
//         try {
//             const response = await axios.get(`${MONGODB_MICROSERVICE_URL}/read`);
//             res.status(response.status).json(response.data);
//         } catch (error) {
//             res.status(error.response.status).json(error.response.data);
//         }
//     })
//     .put(async (req, res) => {
//         try {
//             const response = await axios.put(`${MONGODB_MICROSERVICE_URL}/update`, req.body);
//             res.status(response.status).json(response.data);
//         } catch (error) {
//             res.status(error.response.status).json(error.response.data);
//         }
//     })
//     .delete(async (req, res) => {
    //         try {
    //             const response = await axios.delete(`${MONGODB_MICROSERVICE_URL}/delete`, { data: req.body });
    //             res.status(response.status).json(response.data);
    //         } catch (error) {
    //             res.status(error.response.status).json(error.response.data);
    //         }
//     });
//
// // Assuming the MongoDB microservice has an endpoint for creating data
// app.post('/create_mongodb', async (req, res) => {
//     try {
//         const response = await axios.post(`${MONGODB_MICROSERVICE_URL}/create`, req.body);
//         res.status(response.status).json(response.data);
//     } catch (error) {
//         res.status(error.response.status).json(error.response.data);
//     }
// });
//
// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
//

const express = require('express');
const mysqlRoutes = require('./api/routes/sqlroutes');
const mongodbRoutes = require('./api/routes/mongoroutes');
const cors =require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());

app.use(mysqlRoutes);
app.use(mongodbRoutes);

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

// const PORT = process.env.PORT || 5002;
app.listen(8084, function () {
    console.log('Listening to Port : 8084...');
    // console.log()
})