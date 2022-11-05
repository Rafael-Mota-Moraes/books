import styles from "./styles.module.css";
import Logo from "../Logo";
import Button from "../Button";
import { useEffect, useState } from "react";
import Livro from "../Livro";

function Layout() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/livro")
      .then((resp) => resp.json())
      .then((json) => setLivros(json));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
        <div className={styles.buttonContainer}>
          <Button text="Cadastrar Livro" color="#28a745" textColor="#fff" />
          <Button text="Cadastrar Autor" color="#e0a800" textColor="#fff" />
        </div>
      </header>
      <main className={styles.main}>
        {livros &&
          livros.map((livro) => {
            return <Livro livro={livro} key={livro.id} />;
          })}
      </main>
      <footer className={styles.footer}>
        Desenvolvido por: Rafael M. M. Moreira
      </footer>
    </div>
  );
}

export default Layout;
