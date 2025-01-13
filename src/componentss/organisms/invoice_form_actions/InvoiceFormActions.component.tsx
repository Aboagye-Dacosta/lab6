import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import {
  getFormActionType,
  toggleForm,
} from "../../../store/slice/form_manager_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";
import { FormActionType } from "../../../store/types/form_manager_slice.types";
import Button from "../../atoms/button/Button.component";
import styles from "./invoice_form_actions.styles.module.css";

const InvoiceFormActions: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reset } = useFormContext();
  const formActionType = useAppSelector(getFormActionType);

  const handleCloseForm = () => {
    dispatch(toggleForm());
    reset();
  };

  return (
    <div className={styles.actions}>
      {formActionType == FormActionType.EDIT ? (
        <Fragment>
          <div></div>
          <div className={styles.actions_right}>
            <Button
              size="small"
              variant="secondary"
              type="submit"
              onClick={handleCloseForm}
            >
              Cancel
            </Button>
            <Button size="medium" variant="primary" type="submit">
              Save Changes
            </Button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Button
            variant="tertiary"
            size="small"
            type="button"
            onClick={handleCloseForm}
          >
            Discard
          </Button>

          <div className={styles.actions_right}>
            <Button
              size="medium"
              variant="secondary"
              type="submit"
              onClick={handleCloseForm}
            >
              Save as Draft
            </Button>
            <Button
              size="medium"
              variant="primary"
              type="submit"
              onClick={handleCloseForm}
            >
              Save & Send
            </Button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default InvoiceFormActions;
