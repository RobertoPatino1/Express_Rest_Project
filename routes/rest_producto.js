var express = require("express");
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const producto = require("../models").producto;

router.get("/findAll/json", function (req, res, next) {
  const { rol } = req.user;

  if (rol !== "admin") {
    return res.sendStatus(403);
  }
  producto
    .findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] },
    })
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.status(400).send(error));
});
module.exports = router;
