const express = require("express");
const morgan = require("morgan");
const mongoose = require ('mongoose')

const server = express();

// BBDD CONNECTION
mongoose.connect('mongodb://localhost/inventaridb', { useNewUrlParser: true, useUnifiedTopology: true  })
.then (db => console.log( "*** BDD connectada ***"))
.catch (err => console.log(err))


// SETTINGS
server.set("port", process.env.port || 3000);

// MIDLEWARES
server.use(morgan('dev'));
server.use(express.json());

// ROUTES
server.use("/api_inventari", require("./routes/rutesInventari"))

// STATICS FILES
server.use(express.static(__dirname + "/public"));

server.listen(server.get("port"), () => {
  console.log("Servidor funcionant en el port " + server.get("port"));
});
