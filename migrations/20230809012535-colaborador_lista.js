"use strict";

const colaborador_lista = require("../models").colaborador_lista;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await colaborador_lista.sync();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("colaborador_lista");
  },
};
