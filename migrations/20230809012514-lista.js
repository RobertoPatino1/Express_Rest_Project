"use strict";

const lista = require("../models").lista;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await lista.sync();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("lista");
  },
};
