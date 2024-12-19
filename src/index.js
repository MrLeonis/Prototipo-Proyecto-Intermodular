const express = require("express");

const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), leerPuerto());

app.get("/rutaGet", function (req, res) {
  console.log(
    "Hola! esta es una llamada desde el servidor por la consola de node"
  );
  res.send("Hola desde la nube! Estamos llamando a través de un servidor");
});

function leerPuerto() {
  console.log("hola desde el puerto" + app.get("port"));
}

//Routes
app.use(require("./routes/rutas"));
