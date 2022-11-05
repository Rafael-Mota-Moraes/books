import styles from "./styles.module.css";

function Logo({ text, color, textColor, Icon }) {
  return (
    <button
      className={styles.button}
      style={{ background: color, color: textColor }}
    >
      {text}
      <span className={styles.icon}>{Icon && <Icon />}</span>
    </button>
  );
}

export default Logo;
