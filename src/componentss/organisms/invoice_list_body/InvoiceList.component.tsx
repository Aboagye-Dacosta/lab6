import Filter from "../../atoms/filter/Filter.component";
import styles from "./invoice_list_styles.module.css";

import { getFilters } from "../../../store/slice/app_invoice_filter_slice";
import { getInvoices } from "../../../store/slice/app_invoice_slice";
import { useAppSelector } from "../../../store/store_hooks";
import { ProductStatus } from "../../../types/invoice_item.types";
import { DataSource } from "../../atoms/filter/filter.type";
import InvoiceCard from "../../molecules/invoice_card/InvoiceCard.component";

const InvoiceList: React.FC = () => {
  const invoices = useAppSelector(getInvoices);
  const { filters } = useAppSelector(getFilters);

  return (
    <div className={styles.invoice_list}>
      {/* {invoices.length === 0 ? (
        <div className={styles.empty_invoices}>
          <img src="/assets/illustration-empty.svg" alt="empty invoices" />
        </div>
      ) : ( */}
      <Filter
        data={invoices as unknown as DataSource[]}
        filterKey="status"
        options={filters}
        render={(invoice) => {
          const inv = invoice as unknown as ProductStatus;
          return <InvoiceCard invoice={inv} key={inv.id} />;
        }}
      />
      {/* )} */}
    </div>
  );
};

export default InvoiceList;
