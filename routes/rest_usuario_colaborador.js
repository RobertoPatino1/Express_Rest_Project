var express = require("express");
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const usuario_colaborador = require("../models").usuario_colaborador;

router.get("/findAll/json", function (req, res, next) {
  usuario_colaborador
    .findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] },
    })
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.status(400).send(error));
});
module.exports = router;
