import { useFormContext } from "react-hook-form";
import { toggleForm } from "../../../store/slice/form_manager_slice";
import { useAppDispatch } from "../../../store/store_hooks";
import Button from "../../atoms/button/Button.component";
import styles from "./invoice_form_actions.styles.module.css";

const InvoiceFormActions: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reset } = useFormContext();
  const handleToggleForm = () => {
    dispatch(toggleForm());
    reset();
  };

  const handleSaveAsDraft = () => {
    console.log("save as draft");
  };

  const handleSaveAndSend = () => {
    console.log("save and send");
  };

  return (
    <div className={styles.actions}>
      <Button variant="tertiary" size="small" onClick={handleToggleForm}>
        Discard
      </Button>

      <div className={styles.actions_right}>
        <Button
          size="medium"
          variant="secondary"
          type="submit"
          onClick={handleSaveAsDraft}
        >
          Save as Draft
        </Button>
        <Button
          size="medium"
          variant="primary"
          type="submit"
          onClick={handleSaveAndSend}
        >
          Save & Send
        </Button>
      </div>
    </div>
  );
};

export default InvoiceFormActions;
