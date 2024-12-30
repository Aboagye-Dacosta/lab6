import { useFormContext } from "react-hook-form";
import { ProductStatus } from "../../../types/invoice_item.types";
import { convertToCurrency } from "../../../utils";
import InputLabel from "../../atoms/input_label/InputLabel.component";
import { InvoiceItemProps } from "./invoice_form_invoice_item.types";
import styles from "./invoice_form_invoice_item_styles.module.css";

const InvoiceFormInvoiceItemMobile: React.FC<InvoiceItemProps> = ({
  index,
}) => {
  const { watch, getValues, register } = useFormContext<ProductStatus>();

  watch(`items.${index}.quantity`);
  watch(`items.${index}.price`);

  const computeTotalValue = (defaultValue: number | undefined) => {
    console.log(getValues());
    return getValues()?.items &&
      !isNaN(Number(getValues().items[index].price)) &&
      !isNaN(Number(getValues().items[index].quantity))
      ? Number(getValues().items[index].price) *
          Number(getValues().items[index].quantity)
      : defaultValue;
  };

  return (
    <div className={`${styles.sm}`}>
      <InputLabel
        id={`items.${index}.name`}
        label="Item Name"
        input={
          <input
            type="text"
            {...register(`items.${index}.name`)}
            id={`items.${index}.name`}
          />
        }
      />
      <div className={styles.row}>
        <InputLabel
          id={`items.${index}.quantity`}
          label="Qty"
          input={
            <input
              type="number"
              {...register(`items.${index}.quantity`)}
              id={`items.${index}.quantity`}
            />
          }
        />
        <InputLabel
          id={`items.${index}.price`}
          label="Price"
          input={
            <input
              type="number"
              {...register(`items.${index}.price`)}
              id={`items.${index}.price`}
            />
          }
        />
        <InputLabel
          id={`items.${index}.total`}
          label="Total"
          isStyled={false}
          input={
            <div>
              <input
                hidden
                type="number"
                {...register(`items.${index}.total`)}
                id={`items.${index}.total`}
              />
              {convertToCurrency(computeTotalValue(0) as number).substring(1)}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default InvoiceFormInvoiceItemMobile;
