const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const db = new Sequelize(
  "books",
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql"
  }
);

module.exports = db;
