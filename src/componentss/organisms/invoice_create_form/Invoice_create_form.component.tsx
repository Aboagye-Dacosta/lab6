import { FormProvider, useForm } from "react-hook-form";
import {
  getFormState,
  getIsDraft,
  toggleForm,
} from "../../../store/slice/form_manager_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";
import { ProductStatus } from "../../../types/invoice_item.types";
import Heading from "../../atoms/heading/Heading.component";
import InvoiceFormActions from "../invoice_form_actions/InvoiceFormActions.component";
import InvoiceFormBillFrom from "../invoice_form_bill_from/InvoiceFormBillFrom.component";
import InvoiceFormBillTo from "../invoice_form_bill_to/InvoiceFormBillTo.component";
import InvoiceFormInvoiceDescription from "../invoice_form_inovice_description/InvoiceFormInvoiceDescription.component";
import InvoiceFormInvoiceItems from "../invoice_form_invoice_items/InvoiceFormInvoiceItems.component";
import styles from "./invoice_create_form_styles.module.css";

const InvoiceCreateForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const formState = useAppSelector(getFormState);
  const isDraft = useAppSelector(getIsDraft);

  const handleFormSubmit = (form: ProductStatus) => {
    const data = {
      ...form,
      //@ts-expect-error has the property
      paymentTerms: form.paymentTerms.value,
    };
    if (isDraft) {
      console.log(data);
    }
    console.log(data);
  };
  const method = useForm<ProductStatus>();

  const handleOverlayClick = () => {
    dispatch(toggleForm());
  };

  const handleOverlayKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      dispatch(toggleForm());
    }
  };

  return (
    <FormProvider {...method}>
      <section
        className={`${styles.form_overlay} ${styles[formState]}`}
        onClick={handleOverlayClick}
        onKeyDown={handleOverlayKeyDown}
        role="button"
        tabIndex={0}
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
export default InvoiceCreateForm;
