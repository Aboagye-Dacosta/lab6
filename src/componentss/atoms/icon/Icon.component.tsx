import { IconProps } from "./icon.types";
import styles from "./icon_styles.module.css";

const Icon: React.FC<IconProps> = ({
  src,
  name,
  fill = "bg-white",
  variant = "circle",
  size = "small",
}) => {
  return (
    <div className={`${styles.icon} ${styles[size]} ${fill} ${styles["icon-" + variant]}`}>
      <img src={src} alt={name} className={styles.image} />
    </div>
  );
};

export default Icon;
