const express = require('express');

// require('./spreadsheet');
const bodyParser = require('body-parser');

const app = express();

//routes

app.use(require('./routes/google.routes')); //importamos las rutas de google
app.use(bodyParser.urlencoded({extended: true})); //para que el servidor entienda los datos que le enviamos desde el front
app.use(bodyParser.json()); //para que el servidor entienda los datos que le enviamos desde el front
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //permite el acceso a todos los dominios
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-AÍ-KEY, Access-Control-Allow-Required, Access-Control-Allow-Origin' ); //permite el acceso a todos los headers
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //permite el acceso a todos los metodos
    next();
});

module.exports = app; //exportamos el modulo app para que pueda ser usado en index.js