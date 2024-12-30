import { Outlet } from "react-router-dom";
import styles from "./app_outlet_styles.module.css";
import InvoiceForm from "../invoice_form/InvoiceForm.component";

const AppOutlet: React.FC = () => {
  return (
    <main className={styles.app_outlet}>
      <InvoiceForm />

      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default AppOutlet;
