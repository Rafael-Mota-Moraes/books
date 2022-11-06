import { useState } from "react";
import Button from "../../Button";
import TextInput from "../../TextInput";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function LovoLivroPage() {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate("/");

  async function adicionarItem() {
    const novaData = new Date(data);

    try {
      if (!titulo || !subtitulo || !data) {
        alert("Preencha todos os campos!");
        return;
      } else {
        fetch("http://localhost:3333/livro/", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            titulo: titulo,
            subtitulo: subtitulo,
            dataDePubicacao: novaData
          })
        }).then(() => {
          navigate("/");
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.container}>
      <TextInput value={titulo} onChange={setTitulo} placeholder="Titulo:" />
      <TextInput
        value={subtitulo}
        onChange={setSubtitulo}
        placeholder="Subtitulo:"
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <Button
        text="Adicionar Livro"
        color="#298cf0"
        textColor="#fff"
        onClick={adicionarItem}
      />
    </div>
  );
}

export default LovoLivroPage;
