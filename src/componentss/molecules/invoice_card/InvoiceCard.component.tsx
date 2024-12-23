import { convertToCurrency, convertToFormattedDate } from "../../../utils";
import Badge from "../../atoms/badge/Badge.component";
import { BadgeState } from "../../atoms/badge/badge.types";
import Icon from "../../atoms/icon/Icon.component";
import Text from "../../atoms/text/Text.component";
import { InvoiceCardProps } from "./invoice_card.types";
import styles from "./invoice_card_sytles.module.css";

const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice }) => {
  const { id, createdAt, total, clientName, status } = invoice;

  const formattedDate = convertToFormattedDate(createdAt);
  const formattedTotal = convertToCurrency(Number(total));
  const badgeState = status.toLowerCase() as BadgeState;

  return (
    <article className={styles.invoice_card}>
      <div className={styles.invoice_details}>
        <span>
          <Text as="span" color="tertiary">
            #
          </Text>
          <Text
            as="span"
            weight="weight-700"
            color="theme-black"
            size="text-sm"
          >
            {id}
          </Text>
        </span>
        <div className={styles.invoice_price}>
          <Text color="theme-grey" weight="weight-400" size="text-xs">
            {formattedDate}
          </Text>
          <Text color="theme-black" weight="weight-700" size="text-md">
            {formattedTotal}
          </Text>
        </div>
      </div>
      <div className={styles.invoice_state}>
        <Text color="theme-grey">{clientName}</Text>
        <Badge state={badgeState} />
      </div>
      <span className={styles.invoice_arrow}>
        <Icon
          src="/assets/icon-arrow-right.svg"
          name="arrow right"
          fill="transparent"
          size="x-small"
        />
      </span>
    </article>
  );
};

export default InvoiceCard;
