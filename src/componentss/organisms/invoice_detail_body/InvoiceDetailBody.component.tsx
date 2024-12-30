import { useParams } from "react-router-dom";
import { getInvoiceById } from "../../../store/slice/app_invoice_slice";
import { useAppSelector } from "../../../store/store_hooks";
import { ProductStatus } from "../../../types/invoice_item.types";
import { convertToFormattedDate } from "../../../utils";
import Container from "../../atoms/container/Container.component";
import Text from "../../atoms/text/Text.component";
import InvoiceDetailCard from "../../molecules/invoice_detail_card/InvoiceDetailCard.component";
import { InvoiceDetailCardProps } from "../../molecules/invoice_detail_card/invoice_detail_card.type";
import styles from "./invoice_detail_body_styles.module.css";

const InvoiceDetailBody: React.FC = () => {
  const { id: invoiceId } = useParams();
  const invoice = useAppSelector(
    getInvoiceById(invoiceId as string)
  ) as ProductStatus;

  const {
    id,
    createdAt,
    paymentDue,
    senderAddress,
    clientName,
    description,
    clientAddress,
    clientEmail,
    items,
  } = invoice;

  return (
    <Container>
      <div className={styles.card}>
        <div className={styles.parent}>
          <div className={styles.div1}>
            <span>
              #
              <Text size="text-xl" weight="weight-700">
                {id}
              </Text>
            </span>
            <h2>
              <Text size="text-xl" color="theme-grey">
                {description}
              </Text>
            </h2>
          </div>
          <div className={styles.div2}>
            <Text size="text-xl" color="theme-grey">
              {senderAddress?.street}
            </Text>
            <Text size="text-xl" color="theme-grey">
              {senderAddress?.city}
            </Text>
            <Text size="text-xl" color="theme-grey">
              {senderAddress?.postCode}
            </Text>
            <Text size="text-xl" color="theme-grey">
              {senderAddress?.country}
            </Text>
          </div>
          <div className={styles.div3}>
            <div>
              <Text size="text-xl" color="theme-grey">
                Invoice Date
              </Text>
              <Text size="text-2xl" color="theme-black">
                {convertToFormattedDate(createdAt)}
              </Text>
            </div>
            <div>
              <Text size="text-xl" color="theme-grey">
                Payment Due
              </Text>
              <Text size="text-2xl" color="theme-black">
                {convertToFormattedDate(paymentDue)}
              </Text>
            </div>
          </div>
          <div className={styles.div4}>
            <Text size="text-xl" color="theme-grey">
              Bill To
            </Text>
            <div>
              <Text size="text-2xl">{clientName}</Text>
              <Text size="text-xl" color="theme-grey">
                {clientAddress?.street}
              </Text>
              <Text size="text-xl" color="theme-grey">
                {clientAddress?.city}
              </Text>
              <Text size="text-xl" color="theme-grey">
                {clientAddress?.postCode}
              </Text>
              <Text size="text-xl" color="theme-grey">
                {clientAddress?.country}
              </Text>
            </div>
          </div>
          <div className={styles.div6}>
            <Text size="text-xl" color="theme-grey">
              Send To
            </Text>
            <Text size="text-2xl">{clientEmail}</Text>
          </div>
        </div>
        <InvoiceDetailCard
          invoice={items as unknown as InvoiceDetailCardProps[]}
        />
      </div>
    </Container>
  );
};

export default InvoiceDetailBody;
