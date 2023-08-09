"use strict";

const usuario = require("../models").usuario;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //Creando la tabla a partir de la clase
    await usuario.sync();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  },
};
