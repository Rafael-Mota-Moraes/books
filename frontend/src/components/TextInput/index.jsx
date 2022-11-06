import styles from "./styles.module.css";

function TextInput({ onChange, value, placeholder }) {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
