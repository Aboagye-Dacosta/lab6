import { getTheme, toggleTheme } from "../../../store/slice/app_theme_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";
import Avatar from "../../atoms/avatar/Avatar.component";
import Icon from "../../atoms/icon/Icon.component";
import ThemeToggler from "../../molecules/them_toggler/ThemeToggler.component";
import styles from "./nav_bar_styles.module.css";

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);
  return (
    <nav className={styles.nav}>
      <div>
        <Icon
          src="/assets/logo-base.svg"
          name="logo"
          size="x-large"
          fill="transparent"
          variant="square"
        />
      </div>
      <div className={styles.nav_actions}>
        <ThemeToggler setTheme={() => dispatch(toggleTheme())} theme={theme} />
        <div className={styles.nav_divider}></div>
        <Avatar name="Avatar" src="/assets/image-avatar.jpg" />
      </div>
    </nav>
  );
};

export default NavBar;
