// database connection
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Birthday@16',
    database: 'hotel'
});

db.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('Connected to Database!!!')
});

module.exports = db;