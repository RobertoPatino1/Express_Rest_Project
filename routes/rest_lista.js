var express = require("express");
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const lista = require("../models").lista;

router.get("/findAll/json", function (req, res, next) {
  lista
    .findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] },
    })
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.status(400).send(error));
});
router.get("/findByUsuarioId/:id/json", function (req, res, next) {
  let usuarioId = parseInt(req.params.id);

  lista
    .findAll({
      where: {
        Usuario_idUsuario: usuarioId,
      },
      attributes: { exclude: ["updatedAt", "createdAt"] },
    })
    .then((instancia) => {
      if (instancia) {
        res.status(200).json(instancia);
      } else {
        res
          .status(404)
          .json({ error: "No existe registro con el identificador " + id });
      }
    })
    .catch((error) => res.status(400).send(error));
});
module.exports = router;
