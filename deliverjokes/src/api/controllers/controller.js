const express = require('express')
const conn = require('../../config/dbConnection')

const getCustomers = 'select * from customer';
// const sql = 'INSERT INTO joke.jokes (type_id, setup, punchline) VALUES ((select id from joke.joke_types where type=${joketype}), ?, ?)'
async function getData(req, res) {
    conn.query(getCustomers, function (error, result) {
        if (error) {
            throw error;
        }
        res.send(result)
        console.log(result);

    })
}

async function createJoke(req, res) {
    const { joke, joketype } = req.body;
    const sqlquery = `INSERT INTO joke.jokes (type_id, setup, punchline) VALUES ((select id from joke.joke_types where type=${joketype}), ?, ?)`;

    conn.query(getCustomers, [],function (error, result) {
        if (error) {
            throw error;
        }
        res.send(result)
        console.log(result);

    })

}

module.exports = {
    getData
}