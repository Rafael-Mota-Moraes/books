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
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

router.delete("/livro/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const livro = Livro.findByPk(id);
    if (livro == 0) {
      const livroDeletado = await Livro.destroy({ where: { id: id } });
      res.json(livroDeletado);
    } else {
      res.json({ erros: { mensagem: "Livro não existe" } });
    }
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

router.put("/livro/:id", async (req, res) => {
  const { titulo, subtitulo } = req.body;
  const { id } = req.params;

  try {
    const livro = await Livro.findByPk(id);

    if (titulo) {
      await Livro.update(
        { ...livro, titulo: titulo },
        { where: { id: livro.id } }
      );
    }

    if (subtitulo) {
      await Livro.update(
        { ...livro, subtitulo: subtitulo },
        { where: { id: livro.id } }
      );
    }

    return res.json("Item editado");
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

router.get("/livro/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.query);
  try {
    const livro = await Livro.findByPk(id);

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
