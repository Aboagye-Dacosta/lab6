import { useFormContext } from "react-hook-form";
import { ProductStatus } from "../../../types/invoice_item.types";
import { convertToCurrency } from "../../../utils";
import InputLabel from "../../atoms/input_label/InputLabel.component";
import { InvoiceItemProps } from "./invoice_form_invoice_item.types";
import styles from "./invoice_form_invoice_item_styles.module.css";

const InvoiceFormInvoiceItem: React.FC<InvoiceItemProps> = ({
  index,
  id,
  handleDelete,
}) => {
  const {
    watch,
    getValues,
    register,
    formState: { errors },
  } = useFormContext<ProductStatus>();

  watch(`items.${index}.quantity`);
  watch(`items.${index}.price`);

  const computeTotalValue = (defaultValue: number | undefined) => {
    return getValues()?.items &&
      !isNaN(Number(getValues().items[index].price)) &&
      !isNaN(Number(getValues().items[index].quantity))
      ? Number(getValues().items[index].price) *
          Number(getValues().items[index].quantity)
      : defaultValue;
  };
  return (
    <tr key={id} className={styles.invoice_item}>
      <td>
        <InputLabel
          label="Item Name"
          labelLg={true}
          error={errors.items?.[index]?.name?.message}
          input={
            <input
              {...register(`items.${index}.name`, {
                required: "Item name is required",
              })}
              id={`items.${index}.name`}
            />
          }
        />
      </td>
      <td>
        <InputLabel
          label="Qty."
          id={`items.${index}.quantity`}
          labelLg={true}
          error={errors.items?.[index]?.quantity?.message}
          input={
            <input
              min={1}
              type="number"
              {...register(`items.${index}.quantity`, {
                required: "Quantity is required",
              })}
              id={`items.${index}.quantity`}
            />
          }
        />
      </td>
      <td>
        <InputLabel
          id={`items.${index}.price`}
          label="Price"
          labelLg={true}
          error={errors.items?.[index]?.price?.message}
          input={
            <input
              type="number"
              step="0.001"
              {...register(`items.${index}.price`, {
                required: "Price is required",
              })}
              id={`items.${index}.price`}
            />
          }
        />
      </td>
      <td>
        <InputLabel
          label="Total"
          isStyled={false}
          labelLg={true}
          error={errors.items?.[index]?.total?.message}
          input={
            <div>
              <input
                type="number"
                hidden
                step="0.001"
                {...register(`items.${index}.total`, {
                  required: "Total is required",
                  value: computeTotalValue(undefined),
                })}
                id={`items.${index}.total`}
              />
              {convertToCurrency(computeTotalValue(0) as number).substring(1)}
            </div>
          }
        />
      </td>
      <td className={styles.action}>
        <button type="button" onClick={handleDelete}>
          <img src="/assets/icon-delete.svg" alt="delete" />
        </button>
      </td>
    </tr>
  );
};

export default InvoiceFormInvoiceItem;
