const mysql = require('mysql');

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => console.log("Escuchando por el puerto " + PORT))

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'rc_service',
    user: 'root',
    password: ''
})

conexion.connect((error) => {
    if (error) {
        console.log("ERROR EN LA CONEXION");
        throw error
    }
    console.log('Se a conectado')
})



app.get('/propietario', (req, res) => {
    const sql = 'SELECT * FROM propietario'
    conexion.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            res.send('No hay datos')
        }
    })
})


app.post('/propietario', (req, res) => {
    const sql = 'INSERT INTO propietario SET ?'
    const Arreglo = { Id_propietario, Numero_Identificacion_D, Nombres, Apellidos, TelefonoUCelular } = req.body

    conexion.query(sql, Arreglo, error => {
        if (error) throw error;
        res.send("Agregado exitosamente")
    })
})



app.put('/propietario/:Id_propietario', (req, res) => {

    const {  Numero_Identificacion_D, Nombres, Apellidos, TelefonoUCelular } = req.body
    const Id_propietario = req.params.Id_propietario
    const sql = `UPDATE propietario SET Numero_Identificacion_D='${Numero_Identificacion_D}', Nombres = '${Nombres}', Apellidos = '${Apellidos}', TelefonoUCelular = '${TelefonoUCelular}' WHERE Id_propietario = ${Id_propietario}`
    conexion.query(sql, error => {
        if (error) throw error
        res.send("Actualizado exitosamente")
    })
})


app.delete('/propietario/:Id_propietario', (req, res) => {
    const Id_propietario = req.params.Id_propietario
    const sql = `DELETE FROM propietario WHERE Id_propietario = ${Id_propietario}`;

    conexion.query(sql, error => {
        if (error) throw error
        res.send("Eliminado exitosamente")
    })
})