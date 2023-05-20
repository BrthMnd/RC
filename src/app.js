// * Require
const express = require('express');
const app = express();
const route = require('./router/index');
const port = 3030;
const bodyParser = require("body-parser");
const path = require("path");


// * Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// * Ejs Configuration

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// * Routes
app.use('/', route);
app.use(express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    res.render('index', {});
})


app.use((req, res, next) => {
    res.status(404).render('404', {
    })
});

// * Listen -> Port

try {
    app.listen(port, () => {

        console.log(`escuchando en puerto http://localhost:${port}`)
    })
} catch (err) { console.log(err) }
