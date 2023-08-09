"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuario",
      [
        {
          idUsuario: 1,
          nombreUsuario: "Jenna Doe",
          email: "jenna@gmail.com",
          password: "qwerty",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuario", null, {});
  },
};
