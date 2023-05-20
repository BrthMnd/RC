const express = require('express');
const routes = express.Router()
const mysql = require('../BD/db');

routes.get('/', async (req, res) => {
    const sql = 'SELECT * FROM ofertas'

    const ofer = await mysql.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {

            res.render("oferta", {
                resd: results,
            })
        } else {
            res.send('No hay datos')
        }
    }
    )
})


routes.get('/:Id_ofertas', (req, res) => {
    const Id_ofertas = req.params.Id_ofertas
    const sql = `SELECT * FROM ofertas WHERE id = ${Id_ofertas}`

    mysql.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            res.send('No hay datos')
        }
    })
})


routes.post('/', (req, res) => {
    const sql = 'INSERT INTO ofertas SET ?'
    const Arreglo =
        {
            servicios,
            descripcion,
            inmueble,
            OfertaEstado
        } = req.body

    mysql.query(sql, Arreglo, error => {
        if (error) throw error;
        res.send("Agregado exitosamente")
    })
})



routes.put('/:Id_ofertas', (req, res) => {

    const { servicios, descripcion, inmueble, OfertaEstado } = req.body
    const Id_ofertas = req.params.Id_ofertas
    const sql = `UPDATE ofertas SET servicios='${servicios}', descripcion = '${descripcion}', inmueble = '${inmueble}', OfertaEstado = '${OfertaEstado}' WHERE id = ${Id_ofertas}`
    mysql.query(sql, error => {
        if (error) throw error
        res.send("Actualizado exitosamente")
    })
})


routes.delete('/:Id_ofertas', (req, res) => {
    const Id_ofertas = req.params.Id_ofertas
    const sql = `DELETE FROM ofertas WHERE id = ${Id_ofertas}`;

    mysql.query(sql, error => {
        if (error) throw error
        res.send("Eliminado exitosamente")
    })
})

module.exports = routes