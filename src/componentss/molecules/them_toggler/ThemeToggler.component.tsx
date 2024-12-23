import { BackgroundColor } from "../../../types/app_fill.types";
import Icon from "../../atoms/icon/Icon.component";
import { IconSizes } from "../../atoms/icon/icon.types";
import styles from "./theme_toggle_styles.module.css";
import { ThemeTogglerProps } from "./theme_toggler.types";

const ThemeToggler: React.FC<ThemeTogglerProps> = ({
  theme = "light",
  setTheme,
}) => {
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const iconProps = {
    size: "small" as IconSizes,
    name: theme === "light" ? "moon" : "sun",
    fill: "transparent" as BackgroundColor,
    src: theme === "light" ? "/assets/icon-moon.svg" : "/assets/icon-sun.svg",
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <Icon {...iconProps} />
    </button>
  );
};
export default ThemeToggler;
