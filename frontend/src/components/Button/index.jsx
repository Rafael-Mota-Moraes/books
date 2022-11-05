import styles from "./styles.module.css";

function Logo({ text, color, textColor, Icon }) {
  return (
    <button
      className={styles.button}
      style={{ background: color, color: textColor }}
    >
      {text}
      {Icon && <Icon />}
    </button>
  );
}

export default Logo;
