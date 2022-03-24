const express = require("express");
const app = express();

// const mongoose = require("mongoose");
// const {MONGO_DB_CONFIG} = require("./config/config");


// const errors = require("./middlewares/errors.js");

// const swaggerUi = require("swagger-ui-express"), swaggerDocument = require("./swagger.json");


// const username = "alok-zomandi";
// const password = "lbpE2fnh0ZjevT5J";
// const cluster = "ClusterDemoZomandi0";
// const dbname = "zomandi-demo";

const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/clients', (req, res) => {
    let db_connect = dbo.getDb("zomandi-demo");
  db_connect
    .collection("clients")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// app.listen(port, function(){
//     console.log('now listening to port ' + 40006576);
// })

app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});