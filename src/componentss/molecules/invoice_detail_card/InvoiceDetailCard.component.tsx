import { convertToCurrency } from "../../../utils";
import Text from "../../atoms/text/Text.component";
import { InvoiceDetailCardProps } from "./invoice_detail_card.type";
import styles from "./invoice_detail_card_styles.module.css";

const InvoiceDetailCard: React.FC<{ invoice: InvoiceDetailCardProps[] }> = ({
  invoice,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_data}>
        <table className={styles.lg}>
          <thead>
            <tr>
              <th className={styles.th}>Item Name</th>
              <th className={styles.th}>QTY</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.map((item) => (
              <tr key={item.name}>
                <td className={styles.td}>{item.name}</td>
                <td className={styles.td}>{item.quantity}</td>
                <td className={styles.td}>{convertToCurrency(item.price)}</td>
                <td className={styles.td}>{convertToCurrency(item.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.sm}>
          {invoice.map((item) => (
            <div className={styles.card_m} key={JSON.stringify(item)}>
              <div>
                <Text size="text-lg">{item.name}</Text>
                <Text size="text-lg" color="theme-grey">
                  {item.quantity}x
                  {convertToCurrency(
                    invoice.reduce((acc, item) => acc + item.price, 0)
                  )}
                </Text>
              </div>
              <Text>{convertToCurrency(item.total)}</Text>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.total}>
        <Text>Amount Due</Text>
        <Text>
          {convertToCurrency(
            invoice.reduce((acc, item) => acc + item.total, 0)
          )}
        </Text>
      </div>
    </div>
  );
};

export default InvoiceDetailCard;
