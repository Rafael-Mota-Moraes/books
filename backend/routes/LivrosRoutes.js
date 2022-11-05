const { Router } = require("express");
const Livro = require("../models/LivroModel");
const Autor = require("../models/AutorModel");
const LivroHasAutor = require("../models/LivroHasAutorModel");

const router = Router();

router.post("/livro", async (req, res) => {
  const { titulo, dataDePubicacao, subtitulo, autores } = req.body;

  try {
    const livro = await Livro.create({
      titulo: titulo,
      data_publicacao: dataDePubicacao,
      subtitulo: subtitulo
    });

    const livroComAutores = {
      ...livro,
      autores: [...autores]
    };

    return res.json(livroComAutores);
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

module.exports = router;
