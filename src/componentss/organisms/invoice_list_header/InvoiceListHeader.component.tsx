import {
  getFilters,
  setFilters,
} from "../../../store/slice/app_invoice_filter_slice";
import { getInvoices } from "../../../store/slice/app_invoice_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";
import { filterByProperty } from "../../../utils";
import Button from "../../atoms/button/Button.component";
import Headline from "../../atoms/head_line/Headline.component";
import Text from "../../atoms/text/Text.component";
import DropDownMenu from "../../molecules/drop_down/DropDownMenu.component";
import styles from "./invoice_list_header_styles.module.css";

const invoiceFilters = ["draft", "pending", "paid"];

const InvoiceListHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector(getFilters);
  const invoices = useAppSelector(getInvoices);
  const size = filterByProperty(invoices, "status", filters).length;
  const filterSize = filters.length;

  return (
    <section className={styles.invoice_list_header}>
      <div className={styles.invoice_list_title}>
        <Headline as="h1">Invoices</Headline>
        <Text color="light-purple" size="text-xl">
          <span className={styles.invoice_count_sm}>{size} invoices</span>
          <span className={styles.invoice_count_lg}>
            {filterSize == 3
              ? `There are ${size} total invoices`
              : filterSize > 0
              ? `There ${size == 1 ? "is" : "are"}  ${size}  (${filters.join(
                  ","
                )})  invoice(s)`
              : "No invoices found"}
          </span>
        </Text>
      </div>
      <div className={styles.invoiceFilter}>
        <div>
          <DropDownMenu
            strategy="multiple"
            label="Filter by status"
            selectedOption={filters as unknown as string[]}
            options={invoiceFilters}
            setSelectedOption={(options) => dispatch(setFilters(options))}
          />
        </div>
        <Button
          variant="primary"
          icon="/assets/icon-plus.svg"
          onClick={() => {}}
        >
          <Text color="light-bg" size="text-sm">
            New Invoice
          </Text>
        </Button>
      </div>
    </section>
  );
};

export default InvoiceListHeader;
