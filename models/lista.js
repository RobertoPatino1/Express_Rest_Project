const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "lista",
    {
      idLista: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Usuario_idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "usuario",
          key: "idUsuario",
        },
      },
      nombreLista: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      fechaCreacion: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "lista",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idLista" }],
        },
        {
          name: "fk_Lista_Usuario_idx",
          using: "BTREE",
          fields: [{ name: "Usuario_idUsuario" }],
        },
      ],
    }
  );
};
