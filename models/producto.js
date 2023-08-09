const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    Lista_idLista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lista',
        key: 'idLista'
      }
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreProducto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    estadoProductoEnLista: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProducto" },
        ]
      },
      {
        name: "fk_Producto_Lista1_idx",
        using: "BTREE",
        fields: [
          { name: "Lista_idLista" },
        ]
      },
    ]
  });
};
