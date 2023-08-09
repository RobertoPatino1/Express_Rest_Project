"use strict";

const usuario_colaborador = require("../models").usuario_colaborador;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await usuario_colaborador.sync();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario_colaborador");
  },
};
