import { useFormContext } from "react-hook-form";
import { ProductStatus } from "../../../types/invoice_item.types";
import FormFieldset from "../../atoms/form_fieldset/FormFieldset.component";
import InputLabel from "../../atoms/input_label/InputLabel.component";
import Row from "../../atoms/row/Row.component";

const InvoiceFormBillTo: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductStatus>();

  return (
    <FormFieldset caption={"Bill To"}>
      <InputLabel
        id="clientName"
        error={errors.clientName?.message}
        label="Client’s Name"
        input={
          <input
            {...register("clientName", {
              required: "Client’s Name is required",
            })}
            id="clientName"
          />
        }
      />
      <InputLabel
        id="clientEmail"
        error={errors.clientEmail?.message}
        label="Client’s Email"
        input={
          <input
            {...register("clientEmail", {
              required: "Client’s Email is required",
            })}
            id="clientEmail"
          />
        }
      />
      <InputLabel
        id="clientAddress.street"
        error={errors.clientAddress?.street?.message}
        label="Street Address"
        input={
          <input
            {...register("clientAddress.street", {
              required: "Client’s Street address is required",
            })}
            id="clientAddress.street"
          />
        }
      />
      <Row>
        <section>
          <InputLabel
            id="clientAddress.city"
            error={errors.clientAddress?.city?.message}
            label="City"
            input={
              <input
                {...register("clientAddress.city", {
                  required: "City is required",
                })}
                id="clientAddress.city"
              />
            }
          />
          <InputLabel
            id="clientAddress.postCode"
            error={errors.clientAddress?.postCode?.message}
            label="Post Code"
            input={
              <input
                {...register("clientAddress.postCode", {
                  required: "Post code is required",
                })}
                id="clientAddress.postCode"
              />
            }
          />
        </section>
        <InputLabel
          id="clientAddress.country"
          error={errors.clientAddress?.country?.message}
          label="Country"
          input={
            <input
              {...register("clientAddress.country", {
                required: "Country is required",
              })}
              id="clientAddress.country"
            />
          }
        />
      </Row>
    </FormFieldset>
  );
};

export default InvoiceFormBillTo;
