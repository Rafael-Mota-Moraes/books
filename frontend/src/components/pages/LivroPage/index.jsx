import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function LivroPage() {
  const [livro, setLivro] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3333/livro/${params.id}`)
      .then((resp) => resp.json())
      .then((json) => setLivro(json));
    console.log(livro);
  }, []);

  let data;

  if (livro.data_publicacao) {
    data = livro.data_publicacao.split("T")[0];
    data = new Date(data);
    data = data.toLocaleString("pt-BR", {}).split(" ")[0];
  }

  return (
    <section className={styles.livro}>
      <h1 className={styles.titulo}>{livro.titulo}</h1>
      <h2 className={styles.subtitulo}>{livro.subtitulo}</h2>
      <div>
        <h2>Autores</h2>
        <p>Sem autores cadastrados</p>
      </div>
      <h2 className={styles.data}>Publicado em: {data}</h2>
    </section>
  );
}

export default LivroPage;
