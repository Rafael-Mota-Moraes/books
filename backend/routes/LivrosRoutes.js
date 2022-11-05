const { Router } = require("express");
const Livro = require("../models/LivroModel");
const Autor = require("../models/AutorModel");
const LivroHasAutor = require("../models/LivroHasAutorModel");

const router = Router();

router.post("/livro", async (req, res) => {
  const { titulo, dataDePubicacao, subtitulo } = req.body;

  try {
    const livro = await Livro.create({
      titulo: titulo,
      data_publicacao: dataDePubicacao,
      subtitulo: subtitulo
    });

    return res.json(livro);
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

router.get("/livro", async (req, res) => {
  try {
    const livros = await Livro.findAll();

    return res.json(livros);
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

module.exports = router;
