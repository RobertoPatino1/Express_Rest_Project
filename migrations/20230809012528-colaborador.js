"use strict";

const colaborador = require("../models").colaborador;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await colaborador.sync();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("colaborador");
  },
};
