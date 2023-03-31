const express = require('express')
const conn = require('../../config/dbConnection')

async function getData(req, res) {
    const sqlquery = 'SELECT * FROM joke.jokes';
    conn.query(sqlquery, function (error, result) {
        if (error) {
            throw error;
        }
        res.json(result)
        console.log(result);

    })
}

async function getType(req, res) {
    const sqlquery = 'SELECT type FROM joke.joke_types';
    conn.query(sqlquery, function (error, result) {
        if (error) {
            throw error;
        }
        res.json(result)
        console.log(result);

    })
}

async function createJoke(req, res) {
    let contentArray = [];
    const { content, joketype } = req.body;
    console.log(content, joketype);

    contentArray = content.split("? ");

    const sqlquery = `INSERT INTO joke.jokes (type_id, setup, punchline) VALUES 
                                                       (
                                                        (select id from joke.joke_types where type=(?)), (?), (?))`;

    conn.query(sqlquery, [joketype, contentArray[0], contentArray[1]],function (error, result) {
        if (error) {
            throw error;
        }
        res.send(result)
        console.log(result);

    })

}

async function createType(req, res) {
    const { joketype } = req.body;
    const sqlquery = `INSERT INTO joke.joke_types(type) VALUES (?)`;

    conn.query(sqlquery,[joketype], function (error, result) {
        if (error) {
            throw error;
        }
        res.send(result)
        console.log(result);

    })

}

async function getRandom(req, res) {
    const { joketype } = req.body;
    const sqlquery = `SELECT setup, punchline from joke.jokes, joke.joke_types where joke_types.type = ? and jokes.type_id = joke_types.id ORDER BY RAND() LIMIT 1`;

    conn.query(sqlquery, [joketype],function (error, result) {
        if (error) {
            throw error;
        }
        res.json(result)
        console.log(joketype);
        console.log(result);

    })

}


module.exports = {
    getData,
    getRandom,
    createType,
    createJoke,
    getType
}