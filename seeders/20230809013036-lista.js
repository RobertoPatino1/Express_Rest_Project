"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "lista",
      [
        {
          idLista: 1,
          idUsuario: 1,
          Usuario_idUsuario: 1,
          nombreLista: "Lista compras 1",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lista", null, {});
  },
};
