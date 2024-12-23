import styles from "./checkbox_styles.module.css";
import { CheckboxProps } from "./chekbox.types";

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  checked = false,
  ...rem
}) => {
  return (
    <div className={styles.checkbox}>
      <input
        {...rem}
        checked={checked}
        type="checkbox"
        className={styles.checkbox_input}
        onChange={onChange}
      />
      {(checked || (rem["checked"] as boolean)) && (
        <img
          alt=""
          src="/assets/icon-check.svg"
          className={styles.checkbox_icon}
        />
      )}
      <div
        className={`${styles.checkbox_fill} ${checked && styles.checked}`}
      ></div>
    </div>
  );
};

export default Checkbox;
