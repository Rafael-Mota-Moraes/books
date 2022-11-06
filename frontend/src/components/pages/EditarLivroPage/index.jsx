import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Button";
import TextInput from "../../TextInput";
import styles from "./styles.module.css";

function EditarLivro() {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3333/livro/${params.id}`, {
      method: "GET"
    })
      .then((resp) => resp.json())
      .then((json) => {
        setTitulo(json.titulo);
        setSubtitulo(json.subtitulo);
      });
  }, []);

  async function editarLivro() {
    fetch(`http://localhost:3333/livro/${params.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        titulo: titulo,
        subtitulo: subtitulo
      })
    });

    navigate("/");
  }

  return (
    <div className={styles.container}>
      <TextInput
        value={titulo}
        onChange={setTitulo}
        placeholder="Novo Titulo:"
      />
      <TextInput
        value={subtitulo}
        onChange={setSubtitulo}
        placeholder="Novo Subtitulo:"
      />

      <Button
        text="Editar Livro"
        color="#298cf0"
        textColor="#fff"
        onClick={editarLivro}
      />
    </div>
  );
}

export default EditarLivro;
