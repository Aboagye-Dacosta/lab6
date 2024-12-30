import { PropsWithChildren } from "react";
import styles from "./container_styles.module.css";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={`${styles.container}`}>{children}</div>;
};



export default Container;