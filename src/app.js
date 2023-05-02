const express = require('express');
const app = express();
const route = require('./router/index');
const port = 3030;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use('/', route);


app.listen(port, () => { console.log("localhost:" + port) })