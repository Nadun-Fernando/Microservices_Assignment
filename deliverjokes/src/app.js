const express = require('express');
// const conn = require('./api/database/dbConnection')
const app = express();
const deliverroute = require('./api/routes/routes')
const bodyParser = require("body-parser");

// // database connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Birthday@16',
//     database: 'hotel'
// });
//
// db.connect(function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to Database!!!')
// });

// function executeQuery(sql, cb) {
//     conn.query(sql, function (error, result) {
//         if (error) {
//             throw error;
//         }
//         cb(result);
//     })
// }

// function fetchData(res) {
//     ctrl.executeQuery('select * from customer', function (result){
//         let column;
//         console.log(result);
//         res.write('<table><tr>');
//         for (column in result[0]) {
//             res.write('<th><label>' + column + '</label></th>');
//         }
//         res.write('</tr>');
//         for (var row in result) {
//             res.write('<tr>');
//             for (column in result[row]) {
//                 res.write('<td><label>'  + result[row][column] + '</label></td>');
//             }
//             res.write('</tr>');
//         }
//         res.end('</table>');
//     })
// }


app.use('', deliverroute);

app.listen(8082, function () {
    console.log('Listening to Port : 8082...');
})


