const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_colaborador', {
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    },
    Colaborador_idColaborador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'colaborador',
        key: 'idColaborador'
      }
    }
  }, {
    sequelize,
    tableName: 'usuario_colaborador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
          { name: "Colaborador_idColaborador" },
        ]
      },
      {
        name: "fk_Usuario_has_Colaborador_Colaborador1_idx",
        using: "BTREE",
        fields: [
          { name: "Colaborador_idColaborador" },
        ]
      },
      {
        name: "fk_Usuario_has_Colaborador_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
};
