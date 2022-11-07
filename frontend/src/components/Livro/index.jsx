import styles from "./styles.module.css";
import Button from "../Button";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function Livro({ livro }) {
  let data = livro.data_publicacao.split("T")[0];
  data = new Date(data);
  data = data.toLocaleString("pt-BR", {}).split(" ")[0];

  const navigate = useNavigate();

  async function excluirLivro() {
    await fetch(`http://localhost:3333/livro/${livro.id}`, {
      method: "DELETE"
    });

    navigate("/");
  }

  function irParaPaginaDeEdicao() {
    navigate(`/editar-livro/${livro.id}`);
  }

  return (
    <div className={styles.livro}>
      <Link to={`/livro/${livro.id}`}>
        <h2 className={styles.titulo}>{livro.titulo}</h2>
        <h3 className={styles.subtitulo}>{livro.subtitulo}</h3>
        <h3 className={styles.subtitulo}>Autor: {livro.autor}</h3>
      </Link>
      <div className={styles.buttons}>
        <Button
          text="Editar"
          color="#298cf0"
          textColor="#fff"
          Icon={AiFillEdit}
          onClick={irParaPaginaDeEdicao}
        />
        <Button
          text="Excluir"
          color="#eb1f12"
          textColor="#fff"
          Icon={BsFillTrashFill}
          onClick={excluirLivro}
        />
      </div>
      <p>Publicado em: {data}</p>
    </div>
  );
}

export default Livro;
