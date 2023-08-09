var express = require("express");
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const colaborador_lista = require("../models").colaborador_lista;

router.get("/findAll/json", function (req, res, next) {
  colaborador_lista
    .findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] },
    })
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.status(400).send(error));
});
module.exports = router;
