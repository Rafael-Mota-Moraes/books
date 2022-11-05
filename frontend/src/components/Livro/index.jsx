import styles from "./styles.module.css";
import Button from "../Button";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function Livro({ livro }) {
  let data = livro.data_publicacao.split("T")[0];
  data = new Date(data);
  data = data.toLocaleString("pt-BR", {}).split(" ")[0];

  return (
    <div className={styles.livro}>
      <h2 className={styles.titulo}>{livro.titulo}</h2>
      <h3 className={styles.subtitulo}>{livro.subtitulo}</h3>
      <div className={styles.buttons}>
        <Button
          text="Editar"
          color="#298cf0"
          textColor="#fff"
          Icon={AiFillEdit}
        />
        <Button
          text="Excluir"
          color="#eb1f12"
          textColor="#fff"
          Icon={BsFillTrashFill}
        />
      </div>
      <p>Publicado em: {data}</p>
    </div>
  );
}

export default Livro;
