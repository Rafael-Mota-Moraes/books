import styles from "./styles.module.css";
import { BsBookHalf } from "react-icons/bs";

function Logo() {
  return (
    <div className={styles.logo}>
      <h1>
        Books
        <BsBookHalf />
      </h1>
    </div>
  );
}

export default Logo;
