import NavBar from "../nav_bar/NavBar.component";
import styles from "./header_styles.module.css";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
