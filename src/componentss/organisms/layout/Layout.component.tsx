import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { getTheme } from "../../../store/slice/app_theme_slice";
import { useAppSelector } from "../../../store/store_hooks";
import styles from "./layout_styles.module.css";
import AuthProvider from "../../../provider/auth_provider/AuthProvider";

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
    <AuthProvider>
      <div id="theme" className={styles.layout} ref={ref} data-theme={theme}>
        <Outlet />
      </div>
    </AuthProvider>
  );
};

export default Layout;
