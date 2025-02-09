const { Router } = require("express");
const router = Router();

//Raíz
router.get("/rutaGetConRouter", function (req, res) {
  res.send("Hola desde la nube! Estamos utilizando routes.");
});

router.get("/rutaMagic", function (req, res) {
  res.send("Magic the Gathering es un juego de cartas creado en 1993.");
});

router.get("/rutaYugi", function (req, res) {
  res.send("Yu-Gi-Oh! es un juego de cartas basado en un manga de 1996.");
});

router.get("/rutaStarWars", function (req, res) {
  res.send(
    "Star Wars: Unlimited es un reciente juego de cartas publicado este mismo año 2024."
  );
});

router.get("/rutaPokemon", function (req, res) {
  res.send(
    "Pokémon es la franquicia que más dinero genera a nivel mundial, superando a otras grandes marcas como Disney, Netflixx o Hello Kitty entre otros."
  );
});

router.post("/rutaPOST", function (req, res) {
  console.log("Hola, estamos de pruebas en la ruta POST.");
  res.send("Hola, estamos usando una ruta POST");
});

router.post("/rutaPOSTdeYugi", function (req, res) {
  console.log(
    "El primer set oficial de estas cartas salio al mercado el 8 de Marzo de 2002."
  );
  res.send("Hola, estamos usando la ruta POST de Yu-gi-Oh!");
});

router.post("/rutaPOSTdeMagic", function (req, res) {
  console.log(
    "El primer set oficial de estas cartas salio al mercado el 5 de Agosto de 1993."
  );
  res.send("Hola, estamos usando la ruta POST de Magic");
});

router.post("/rutaPOSTdePokemon", function (req, res) {
  console.log(
    "El primer set oficial de estas cartas salio al mercado el 20 de Octubre de 1996."
  );
  res.send("Hola, estamos usando la ruta POST de Pokemon");
});

router.post("/rutaPOSTdeStarWars", function (req, res) {
  console.log(
    "El primer set oficial de estas cartas salio al mercado el 8 de Marzo de 2024."
  );
  res.send("Hola, estamos usando la ruta POST de Star Wars:Unlimited");
});

router.post("/rutaPOSTbody", function (req, res) {
  req.body = "pruebas del request";
  console.log("Hola, estamos de pruebas en la ruta POST con body.");
  res.json({
    saludo: "Estamos usando el json a traves de request body",
  });
});

module.exports = router;
