import Livro from "../../Livro";
import styles from "./styles.module.css";

function LivrosPage({ livros }) {
  return (
    <section className={styles.livros}>
      {livros &&
        livros.map((livro) => {
          return <Livro livro={livro} key={livro.id} />;
        })}
    </section>
  );
}

export default LivrosPage;
