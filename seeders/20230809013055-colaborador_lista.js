"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "colaborador_lista",
      [
        {
          Colaborador_idColaborador: 1,
          Lista_idLista: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colaborador_lista", null, {});
  },
};
