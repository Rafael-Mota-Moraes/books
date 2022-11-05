import styles from "./styles.module.css";

function Livro({ livro }) {
  let data = livro.data_publicacao.split("T")[0];
  data = new Date(data);
  data = data.toLocaleString("pt-BR", {}).split(" ")[0];

  return (
    <div className={styles.livro}>
      <h2 className={styles.titulo}>{livro.titulo}</h2>
      <h3 className={styles.subtitulo}>{livro.subtitulo}</h3>
      <p>Publicado em: {data}</p>
    </div>
  );
}

export default Livro;
