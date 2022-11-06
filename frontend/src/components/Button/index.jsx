import styles from "./styles.module.css";

function Button({ text, color, textColor, Icon, onClick }) {
  return (
    <button
      className={styles.button}
      style={{ background: color, color: textColor }}
      onClick={onClick}
    >
      {text}
      <span className={styles.icon}>{Icon && <Icon />}</span>
    </button>
  );
}

export default Button;
