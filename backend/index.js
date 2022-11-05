const express = require("express");
const dotenv = require("dotenv");
const LivroHasAutor = require("./models/LivroHasAutorModel.js");
const LivrosRoutes = require("./routes/LivrosRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.use(LivrosRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}!`);
});
