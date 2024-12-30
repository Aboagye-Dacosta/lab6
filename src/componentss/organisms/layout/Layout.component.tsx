import { useEffect, useRef } from "react";
import { getTheme } from "../../../store/slice/app_theme_slice";
import { useAppSelector } from "../../../store/store_hooks";
import AppOutlet from "../app_outlet/AppOutlet.component";
import Header from "../header/Header.component";
import styles from "./layout_styles.module.css";

const Layout: React.FC = () => {
  const ref = useRef(null);
  const { theme } = useAppSelector(getTheme);

  useEffect(() => {
    if (ref.current) {
      const div = ref.current as HTMLDivElement;
      div.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <div id="theme" className={styles.layout} ref={ref} data-theme={theme}>
      <Header />
      <AppOutlet />
    </div>
  );
};

export default Layout;
