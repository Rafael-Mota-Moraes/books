const { Router } = require("express");
const Livro = require("../models/LivroModel");
const Autor = require("../models/AutorModel");

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

router.delete("/autor/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const autorDeletado = await Autor.destroy({ where: { id: id } });
    res.json(autorDeletado);
  } catch (e) {
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

router.put("/autor/:id", async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  try {
    const autor = await Autor.findByPk(id);

    if (nome) {
      await Livro.update({ ...autor, nome: nome }, { where: { id: autor.id } });
    }

    return res.json("Item editado");
  } catch (e) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

router.get("/autor", async (req, res) => {
  try {
    const autores = await Autor.findAll();

    res.json(autores);
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

router.get("/autor/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const autor = await Autor.findByPk(id);

    res.json(autor);
  } catch (err) {
    console.log(err);
    return res.send({ erros: { mensagem: "Ocorreu um erro..." } });
  }
});

module.exports = router;
