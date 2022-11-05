const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const LivroHasAutor = require("./models/LivroHasAutorModel.js");

const app = express();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}!`);
});
