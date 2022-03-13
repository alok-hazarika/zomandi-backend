const express = require("express");
const app = express();

const mongoose = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/config");


// const errors = require("./middlewares/errors.js");

// const swaggerUi = require("swagger-ui-express"), swaggerDocument = require("./swagger.json");

mongoose.connect('mongodb://localhost/zomandidata');
mongoose.Promise = global.Promise;

app.use(express.json());

app.get('/api', (req, res) => res.send('API working!!'));

app.listen(process.env.port || 4000, function(){
    console.log(`now listening to port  ${process.env.port}`);
})