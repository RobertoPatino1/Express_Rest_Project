const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('colaborador', {
    idColaborador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUsuarioColaboracion: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'colaborador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idColaborador" },
        ]
      },
    ]
  });
};
