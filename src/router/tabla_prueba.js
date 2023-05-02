const express = require('express');
const routes = express.Router()
const mysql = require('../BD/db');

routes.get("/", (req, res) => {
    mysql.query('SELECT * FROM tabla_prueba', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);

    });
})
routes.get("/:name", (req, res) => {
    const name = req.params.name
    console.log(name)

    mysql.query(`SELECT * FROM tabla_prueba WHERE nombre LIKE '%${name}%'`, function (error, results, fields) {
        if (error) {
            console.error(error);


        } else {
            if (results.length > 0) {
                res.send(results);

            } else {
                res.status(404);

            }


        }
    }
    );
})

module.exports = routes;