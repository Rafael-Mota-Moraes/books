const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/sequelizeConfig.js");
const Autor = require("./AutorModel");
const Livro = require("./LivroModel");

const LivroHasAutor = db.define("livro_has_autor", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_livro: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_autor: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

/*
  pertence a 1 livro
  tem vários autores
*/

LivroHasAutor.sync();

module.exports = Livro;
