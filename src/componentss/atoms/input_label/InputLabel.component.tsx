import Text from "../text/Text.component";
import { InputLabelProps } from "./input_label.types";
import styles from "./input_label_styles.module.css";

const InputLabel: React.FC<InputLabelProps> = ({
  input,
  label,
  error,
  id,
  isStyled = true,
}) => {
  return (
    <div className={styles.label_container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          <Text color="theme-grey">{label}</Text>
          {error && <Text>{error}</Text>}
        </label>
      )}
      <div className={isStyled ? styles.content : styles.width}>{input}</div>
    </div>
  );
};

export default InputLabel;
