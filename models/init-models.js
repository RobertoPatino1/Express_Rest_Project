var DataTypes = require("sequelize").DataTypes;
var _colaborador = require("./colaborador");
var _colaborador_lista = require("./colaborador_lista");
var _lista = require("./lista");
var _producto = require("./producto");
var _usuario = require("./usuario");
var _usuario_colaborador = require("./usuario_colaborador");

function initModels(sequelize) {
  var colaborador = _colaborador(sequelize, DataTypes);
  var colaborador_lista = _colaborador_lista(sequelize, DataTypes);
  var lista = _lista(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var usuario_colaborador = _usuario_colaborador(sequelize, DataTypes);

  colaborador.belongsToMany(lista, { as: 'Lista_idLista_lista', through: colaborador_lista, foreignKey: "Colaborador_idColaborador", otherKey: "Lista_idLista" });
  colaborador.belongsToMany(usuario, { as: 'Usuario_idUsuario_usuarios', through: usuario_colaborador, foreignKey: "Colaborador_idColaborador", otherKey: "Usuario_idUsuario" });
  lista.belongsToMany(colaborador, { as: 'Colaborador_idColaborador_colaboradors', through: colaborador_lista, foreignKey: "Lista_idLista", otherKey: "Colaborador_idColaborador" });
  usuario.belongsToMany(colaborador, { as: 'Colaborador_idColaborador_colaborador_usuario_colaboradors', through: usuario_colaborador, foreignKey: "Usuario_idUsuario", otherKey: "Colaborador_idColaborador" });
  colaborador_lista.belongsTo(colaborador, { as: "Colaborador_idColaborador_colaborador", foreignKey: "Colaborador_idColaborador"});
  colaborador.hasMany(colaborador_lista, { as: "colaborador_lista", foreignKey: "Colaborador_idColaborador"});
  usuario_colaborador.belongsTo(colaborador, { as: "Colaborador_idColaborador_colaborador", foreignKey: "Colaborador_idColaborador"});
  colaborador.hasMany(usuario_colaborador, { as: "usuario_colaboradors", foreignKey: "Colaborador_idColaborador"});
  colaborador_lista.belongsTo(lista, { as: "Lista_idLista_listum", foreignKey: "Lista_idLista"});
  lista.hasMany(colaborador_lista, { as: "colaborador_lista", foreignKey: "Lista_idLista"});
  producto.belongsTo(lista, { as: "Lista_idLista_listum", foreignKey: "Lista_idLista"});
  lista.hasMany(producto, { as: "productos", foreignKey: "Lista_idLista"});
  lista.belongsTo(usuario, { as: "Usuario_idUsuario_usuario", foreignKey: "Usuario_idUsuario"});
  usuario.hasMany(lista, { as: "lista", foreignKey: "Usuario_idUsuario"});
  usuario_colaborador.belongsTo(usuario, { as: "Usuario_idUsuario_usuario", foreignKey: "Usuario_idUsuario"});
  usuario.hasMany(usuario_colaborador, { as: "usuario_colaboradors", foreignKey: "Usuario_idUsuario"});

  return {
    colaborador,
    colaborador_lista,
    lista,
    producto,
    usuario,
    usuario_colaborador,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
