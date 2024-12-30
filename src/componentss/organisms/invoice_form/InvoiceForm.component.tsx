import { FormProvider, useForm } from "react-hook-form";
import { getFormState } from "../../../store/slice/form_manager_slice";
import { useAppSelector } from "../../../store/store_hooks";
import { ProductStatus } from "../../../types/invoice_item.types";
import Heading from "../../atoms/heading/Heading.component";
import InvoiceFormActions from "../invoice_form_actions/InvoiceFormActions.component";
import InvoiceFormBillFrom from "../invoice_form_bill_from/InvoiceFormBillFrom.component";
import InvoiceFormBillTo from "../invoice_form_bill_to/InvoiceFormBillTo.component";
import InvoiceFormInvoiceDescription from "../invoice_form_inovice_description/InvoiceFormInvoiceDescription.component";
import InvoiceFormInvoiceItems from "../invoice_form_invoice_items/InvoiceFormInvoiceItems.component";
import styles from "./invoice_form_styles.module.css";

const InvoiceForm: React.FC = () => {
  const formState = useAppSelector(getFormState);

  const handleFormSubmit = (form: ProductStatus) => {
    console.log(form);
  };
  const method = useForm<ProductStatus>();

  return (
    <FormProvider {...method}>
      <section
        className={`${styles.form_overlay} ${styles[formState]}`}
      ></section>
      <form
        onSubmit={method.handleSubmit(handleFormSubmit)}
        className={`${styles.form} ${styles[formState]}`}
      >
        <div className={styles.form_body}>
          <Heading>New Invoice</Heading>
          <InvoiceFormBillFrom />
          <InvoiceFormBillTo />
          <InvoiceFormInvoiceDescription />
          <InvoiceFormInvoiceItems />
        </div>
        <InvoiceFormActions />
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
