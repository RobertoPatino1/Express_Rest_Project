const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "colaborador_lista",
    {
      Colaborador_idColaborador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "colaborador",
          key: "idColaborador",
        },
      },
      Lista_idLista: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "lista",
          key: "idLista",
        },
      },
    },
    {
      sequelize,
      tableName: "colaborador_lista",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "Colaborador_idColaborador" },
            { name: "Lista_idLista" },
          ],
        },
        {
          name: "fk_Colaborador_has_Lista_Lista1_idx",
          using: "BTREE",
          fields: [{ name: "Lista_idLista" }],
        },
        {
          name: "fk_Colaborador_has_Lista_Colaborador1_idx",
          using: "BTREE",
          fields: [{ name: "Colaborador_idColaborador" }],
        },
      ],
    }
  );
};
