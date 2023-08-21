"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "lista",
      [
        {
          idLista: 1,
          Usuario_idUsuario: 1,
          nombreLista: "Lista compras 1",
        },
        {
          idLista: 2,
          Usuario_idUsuario: 1,
          nombreLista: "Lista compras 2",
        },
        {
          idLista: 3,
          Usuario_idUsuario: 2,
          nombreLista: "Parrillada",
        },
        {
          idLista: 4,
          Usuario_idUsuario: 3,
          nombreLista: "Comida cumpleaños mamá",
        },
        {
          idLista: 5,
          Usuario_idUsuario: 3,
          nombreLista: "Frutas para la semana",
        },
        {
          idLista: 6,
          Usuario_idUsuario: 3,
          nombreLista: "Compras cena romántica",
        },
        {
          idLista: 7,
          Usuario_idUsuario: 4,
          nombreLista: "Comida para la semana",
        },
        {
          idLista: 8,
          Usuario_idUsuario: 4,
          nombreLista: "Compras proyecto quimica",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lista", null, {});
  },
};
