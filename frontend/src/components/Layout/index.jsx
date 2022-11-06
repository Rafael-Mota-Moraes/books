import styles from "./styles.module.css";
import Logo from "../Logo";
import Button from "../Button";
import { useEffect, useState } from "react";
import Livro from "../Livro";
import { AiOutlinePlusCircle } from "react-icons/ai";
import LivrosPage from "../pages/LivrosPage";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import NovoLivroPage from "../pages/NovoLivroPage";
import EditarLivro from "../pages/EditarLivroPage";
import LivroPage from "../pages/LivroPage";

function Layout() {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3333/livro")
      .then((resp) => resp.json())
      .then((json) => setLivros(json));
  }, []);

  function irParaPaginaDeCadastroDeLivro() {
    navigate("/novo-livro");
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.buttonContainer}>
          <Button
            text="Cadastrar Livro"
            color="#28a745"
            textColor="#fff"
            Icon={AiOutlinePlusCircle}
            onClick={irParaPaginaDeCadastroDeLivro}
          />
        </div>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<LivrosPage livros={livros} />} />
          <Route path="/novo-livro" element={<NovoLivroPage />} />
          <Route path="/editar-livro/:id" element={<EditarLivro />} />
          <Route path="/livro/:id" element={<LivroPage />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        Desenvolvido por: Rafael M. M. Moreira
      </footer>
    </div>
  );
}

export default Layout;
