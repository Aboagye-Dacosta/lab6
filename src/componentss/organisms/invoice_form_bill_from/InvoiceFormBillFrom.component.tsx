import { nanoid } from "nanoid";
import { useFormContext } from "react-hook-form";
import { ProductStatus } from "../../../types/invoice_item.types";
import FormFieldset from "../../atoms/form_fieldset/FormFieldset.component";
import InputLabel from "../../atoms/input_label/InputLabel.component";
import Row from "../../atoms/row/Row.component";

const InvoiceFormBillFrom: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductStatus>();

  return (
    <FormFieldset caption={"Bill From"}>
      <input
        type="text"
        {...register("id", {
          value: nanoid(),
        })}
        hidden
      />
      <InputLabel
        id="senderAddress.street"
        error={errors.senderAddress?.street?.message}
        label="Street Address"
        input={
          <input
            {...register("senderAddress.street", {
              required: "Street is required",
            })}
            id="senderAddress.street"
          />
        }
      />

      <Row>
        <section>
          <InputLabel
            id="senderAddress.city"
            error={errors.senderAddress?.city?.message}
            label="City"
            input={
              <input
                {...register("senderAddress.city", {
                  required: "City is required",
                })}
                id="senderAddress.city"
              />
            }
          />
          <InputLabel
            id="senderAddress.postCode"
            error={errors.senderAddress?.postCode?.message}
            label="Post Code"
            input={
              <input
                {...register("senderAddress.postCode", {
                  required: "Post code is required",
                })}
                id="senderAddress.postCode"
              />
            }
          />
        </section>
        <InputLabel
          id="senderAddress.country"
          error={errors.senderAddress?.country?.message}
          label="Country"
          input={
            <input
              {...register("senderAddress.country", {
                required: "Country is required",
              })}
              id="senderAddress.country"
            />
          }
        />
      </Row>
    </FormFieldset>
  );
};

export default InvoiceFormBillFrom;
