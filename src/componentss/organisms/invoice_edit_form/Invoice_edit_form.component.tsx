import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getInvoiceById } from "../../../store/slice/app_invoice_slice";
import {
  getFormState,
  toggleForm,
} from "../../../store/slice/form_manager_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";
import { ProductStatus } from "../../../types/invoice_item.types";
import Heading from "../../atoms/heading/Heading.component";
import Text from "../../atoms/text/Text.component";
import InvoiceFormActions from "../invoice_form_actions/InvoiceFormActions.component";
import InvoiceFormBillFrom from "../invoice_form_bill_from/InvoiceFormBillFrom.component";
import InvoiceFormBillTo from "../invoice_form_bill_to/InvoiceFormBillTo.component";
import InvoiceFormInvoiceDescription from "../invoice_form_inovice_description/InvoiceFormInvoiceDescription.component";
import InvoiceFormInvoiceItems from "../invoice_form_invoice_items/InvoiceFormInvoiceItems.component";
import styles from "./invoice_edit_form_styles.module.css";

const selectPaymentTerms: {
  [key: number]: {
    label: string;
    value: number;
  };
} = {
  1: {
    label: "Net 10 Day",
    value: 1,
  },
  7: {
    label: "Net 7 Days",
    value: 7,
  },
  30: {
    label: "Net 30 Days",
    value: 30,
  },
};

const InvoiceEditForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const invoice = useAppSelector(getInvoiceById(id ?? ""));
  const formState = useAppSelector(getFormState);

  const handleFormSubmit = (form: ProductStatus) => {
    const data = {
      ...form,
      //@ts-expect-error has the property
      paymentTerms: form.paymentTerms.value,
    };
    console.log(data);
  };
  
  const method = useForm<ProductStatus>({
    defaultValues: {
      ...invoice,
      paymentTerms: selectPaymentTerms[
        invoice?.paymentTerms ?? 1
      ] as unknown as number,
    },
  });

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
          <Heading>
            Edit{" "}
            <Text color="primary" size="text-3xl">
              #
            </Text>
            {id}
          </Heading>
          <InvoiceFormBillFrom />
          <InvoiceFormBillTo />
          <InvoiceFormInvoiceDescription />
          <InvoiceFormInvoiceItems initialItems={invoice?.items} />
        </div>
        <InvoiceFormActions />
      </form>
    </FormProvider>
  );
};
export default InvoiceEditForm;
