import { PropsWithChildren } from "react";
import Text from "../text/Text.component";
import { FormFieldsetProps } from "./form_fieldset.types";
import styles from "./form_fieldset_styles.module.css";

const FormFieldset: React.FC<PropsWithChildren<FormFieldsetProps>> = ({
  children,
  caption,
}) => {
  return (
    <div className={styles.fieldset}>
      <Text color="primary" as="p">{caption}</Text>
      {children}
    </div>
  );
};

export default FormFieldset;
