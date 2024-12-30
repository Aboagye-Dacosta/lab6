import { Link, To } from "react-router-dom";
import Text from "../text/Text.component";
import styles from "./backwards_link._styles.module.css";

const BackwardLink: React.FC = () => {
  return (
    <div className={styles.link_container}>
      <Link to={-1 as To} className={styles.link}>
        <img
          src="/assets/icon-arrow-left.svg"
          alt="back arrow"
          className={styles.link_icon}
        />
        <Text>Go Back</Text>
      </Link>
    </div>
  );
};

export default BackwardLink;
