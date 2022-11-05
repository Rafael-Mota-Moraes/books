const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/sequelizeConfig");

const Autor = db.define("autor", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  data_de_nascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sexo: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});

Autor.sync();

module.exports = Autor;
