import { PropsWithChildren } from "react";
import styles from "./row_styles.module.css";

const Row: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
