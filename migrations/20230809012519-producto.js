"use strict";

const producto = require("../models").producto;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await producto.sync();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("producto");
  },
};
