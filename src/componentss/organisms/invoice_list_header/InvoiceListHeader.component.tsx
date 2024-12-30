import {
  getFilters,
  setFilters,
} from "../../../store/slice/app_invoice_filter_slice";
import { getInvoices } from "../../../store/slice/app_invoice_slice";
import {
  getFormState,
  setFormActionType,
  toggleForm,
} from "../../../store/slice/form_manager_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";
import { FormActionType } from "../../../store/types/form_manager_slice.types";
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
  const formState = useAppSelector(getFormState);

  const size = filterByProperty(invoices, "status", filters).length;
  const filterSize = filters.length;

  const getInvoiceCountText = () => {
    if (filterSize === 3) {
      return `There are ${size} total invoices`;
    }

    if (filterSize > 0) {
      const verb = size === 1 ? "is" : "are";
      const invoiceText = size === 1 ? "invoice" : "invoices";
      return `There ${verb} ${size} ${filters.join(", ")} ${invoiceText}`;
    }

    return "No invoices found";
  };

  const handleOpenOrCloseForm = () => {
    dispatch(toggleForm());
    if (formState == "closed") {
      dispatch(setFormActionType(FormActionType.CREATE));
    }
  };

  return (
    <section className={styles.invoice_list_header}>
      <div className={styles.invoice_list_title}>
        <Headline as="h1">Invoices</Headline>
        <Text color="light-purple" size="text-xl">
          <span className={styles.invoice_count_sm}>{size} invoices</span>
          <span className={styles.invoice_count_lg}>
            {getInvoiceCountText()}
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
        <div className={styles.invoice_count_sm}>
          <Button
            variant="primary"
            icon="/assets/icon-plus.svg"
            onClick={handleOpenOrCloseForm}
            size="small"
          >
            <Text color="light-bg" size="text-sm">
              New
            </Text>
          </Button>
        </div>
        <div className={styles.invoice_count_lg}>
          <Button
            variant="primary"
            icon="/assets/icon-plus.svg"
            onClick={handleOpenOrCloseForm}
          >
            <Text color="light-bg" size="text-sm">
              New Invoice
            </Text>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvoiceListHeader;
