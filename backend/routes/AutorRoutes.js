const { Router } = require("express");
const Livro = require("../models/LivroModel");
const Autor = require("../models/AutorModel");
const LivroHasAutor = require("../models/LivroHasAutorModel");

const router = Router();

router.post("/autor", async (req, res) => {
  const { nome, data_de_nascimento, sexo } = req.body;

  try {
    const autor = await Autor.create({ nome, data_de_nascimento, sexo });

    res.json(autor);
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

module.exports = router;
