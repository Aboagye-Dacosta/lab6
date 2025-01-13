import { nanoid } from "nanoid";
import { useState } from "react";
import { Item } from "../../../types/invoice_item.types";
import Button from "../../atoms/button/Button.component";
import FormFieldset from "../../atoms/form_fieldset/FormFieldset.component";
import InvoiceFormInvoiceItem from "../invoice_form_invoice_item/InvoiceFormInvoiceItem.component";
import styles from "./invoice_form_invoice_items.styles.module.css";
import { InvoiceFormInvoiceItem as InvoiceItemType } from "./invoice_form_invoice_items.types";

const InvoiceFormInvoiceItems: React.FC<{ initialItems?: Item[] }> = ({
  initialItems = [],
}) => {
  const createItem = (_: Item, i: number) => {
    const id = nanoid();
    return {
      component: (
        <InvoiceFormInvoiceItem
          id={id}
          index={i}
          handleDelete={() => handleRemoveItem(id)}
        />
      ),
      key: id,
    };
  };
  const [items, setItems] = useState<InvoiceItemType[]>(
    initialItems.map(createItem)
  );

  const handleRemoveItem = (id: string) => {
    setItems((items) => items.filter((itm) => itm.key !== id));
  };

  const handleAddItem = () =>
    setItems((items) => {
      const id = nanoid();
      return [
        ...items,
        {
          component: (
            <InvoiceFormInvoiceItem
              id={id}
              index={items.length}
              handleDelete={() => handleRemoveItem(id)}
            />
          ),
          key: id,
        },
      ];
    });

  return (
    <FormFieldset caption="Item List">
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{items.map((item) => item.component)}</tbody>
      </table>
      {/* <div className={`${styles.sm}`}>{items.map((item) => item.component)}</div> */}
      <Button
        size="large"
        variant="tertiary"
        type="button"
        onClick={handleAddItem}
      >
        Add Item
      </Button>
    </FormFieldset>
  );
};

export default InvoiceFormInvoiceItems;
