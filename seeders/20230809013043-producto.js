"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "producto",
      [
        {
          Lista_idLista: 1,
          idProducto: 1,
          nombreProducto: "Manzana",
          cantidad: 3,
          categoria: "Fruta",
          estadoProductoEnLista: "Pendiente",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("producto", null, {});
  },
};
