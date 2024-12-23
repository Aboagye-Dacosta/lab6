import { AvatarProps } from "./avatar.types";
import styles from "./avatar_styles.module.css";

const Avatar: React.FC<AvatarProps> = ({ src, name, size = "small" }) => {
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      <img src={src} className={styles.image} alt={name} />
    </div>
  );
};

export default Avatar;
