const express = require('express')
const conn = require('../../config/dbConnection')

const getCustomers = 'select * from customer';
async function executeQuery(sql, cb) {
    conn.query(getCustomers, function (error, result) {
        if (error) {
            throw error;
        }
        cb.send(result)
        console.log(result);

    })
}

module.exports = {
    executeQuery
}