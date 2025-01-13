import { getFormActionType } from "../../../store/slice/form_manager_slice";
import { useAppSelector } from "../../../store/store_hooks";
import { FormActionType } from "../../../store/types/form_manager_slice.types";
import InvoiceCreateForm from "../invoice_create_form/Invoice_create_form.component";
import InvoiceEditForm from "../invoice_edit_form/Invoice_edit_form.component";

const InvoiceForm: React.FC = () => {
  const formActionType = useAppSelector(getFormActionType);

  switch (formActionType) {
    case FormActionType.CREATE:
      return <InvoiceCreateForm />;
    case FormActionType.EDIT:
      return <InvoiceEditForm />;
  }
};

export default InvoiceForm;
