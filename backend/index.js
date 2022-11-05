import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}!`);
});
