import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "books",
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD
);
