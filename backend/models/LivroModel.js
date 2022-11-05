const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/sequelizeConfig");

const Livro = db.define("livro", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  data_publicacao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  subtitulo: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});

/*
  pertence a 1 livro
  tem vários autores
*/

Livro.sync();

module.exports = Livro;
