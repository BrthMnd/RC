const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'rc_services',
    password: ''
});

connection.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
});
module.exports = connection;
