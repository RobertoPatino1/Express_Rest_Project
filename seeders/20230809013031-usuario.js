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
        {
          idUsuario: 2,
          nombreUsuario: "John Doe",
          email: "john@gmail.com",
          password: "qwerty",
        },
        {
          idUsuario: 3,
          nombreUsuario: "Walter White",
          email: "heisenberg@gmail.com",
          password: "willy_wonka",
        },
        {
          idUsuario: 4,
          nombreUsuario: "Jesse Pinkman",
          email: "pinkman@gmail.com",
          password: "yeah_science",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuario", null, {});
  },
};
