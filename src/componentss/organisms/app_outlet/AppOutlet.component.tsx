import { Outlet } from "react-router-dom";
import styles from "./app_outlet_styles.module.css";

const AppOutlet: React.FC = () => {
  return (
    <main className={styles.app_outlet}>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default AppOutlet;
