import { useFormContext } from "react-hook-form";
import { getTheme } from "../../../store/slice/app_theme_slice";
import { useAppSelector } from "../../../store/store_hooks";
import { ProductStatus } from "../../../types/invoice_item.types";
import ControlledSelect from "../../atoms/control_select/ControlledSelect.component";
import FormFieldset from "../../atoms/form_fieldset/FormFieldset.component";
import InputLabel from "../../atoms/input_label/InputLabel.component";
import Row from "../../atoms/row/Row.component";
import Select from "../../atoms/select/Select.component";

const options = [
  {
    label: "Net 1 Day",
    value: "Net 1 Day",
  },
  {
    label: "Net 7 Days",
    value: "Net 7 Days",
  },
  {
    label: "Net 14 Days",
    value: "Net 14 Days",
  },
];

const InvoiceFormInvoiceDescription: React.FC = () => {
  const { theme } = useAppSelector(getTheme);
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ProductStatus>();

  return (
    <FormFieldset caption="">
      <Row>
        <InputLabel
          id="createdAt"
          error={errors.clientAddress?.country?.message}
          label="Invoice Date"
          input={
            <input
              type="date"
              {...register("paymentDue", {
                required: "Invoice date is required",
              })}
              id="createdAt"
            />
          }
        />
        <InputLabel
          id="createdAt"
          error={errors.clientAddress?.country?.message}
          label="Invoice Date"
          input={
            <ControlledSelect
              control={control}
              name="paymentTerms"
              message="Payment terms is required"
            >
              <Select isDarkMode={theme == "dark"} options={options} />
            </ControlledSelect>
          }
        />
      </Row>
      <InputLabel
        id="description"
        error={errors.description?.message}
        label="Project Description"
        input={
          <input
            {...register("description", {
              required: "Description is required",
            })}
            id="description"
          />
        }
      />
    </FormFieldset>
  );
};

export default InvoiceFormInvoiceDescription;
