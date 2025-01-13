import { Outlet } from "react-router-dom";
import InvoiceForm from "../invoice_form/invoice_form.component";
import styles from "./app_outlet_styles.module.css";

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
