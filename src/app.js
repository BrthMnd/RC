const express = require('express');
const app = express();
const route = require('./router/index');
const port = 3030;
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', route);

app.get('/', (req, res, next) => {
    try {
        res.render('index', {titulo : "Lo logramos"})
    } catch (error) {	
        console.log("hola")
    }
})
app.use((req, res, next) => {
    res.status(404).render('404' ,{
        titulo : "404",
        texto : "La página no existe"
    })
});
app.listen(port, () => { console.log("localhost:" + port) })