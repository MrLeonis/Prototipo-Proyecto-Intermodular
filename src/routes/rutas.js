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

module.exports = router;
