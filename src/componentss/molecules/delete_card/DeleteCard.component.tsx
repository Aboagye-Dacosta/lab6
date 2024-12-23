import Button from "../../atoms/button/Button.component";
import Text from "../../atoms/text/Text.component";
import { DeleteCardProps } from "./delete_card.types";
import styles from "./delete_card_styles.module.css";
const DeleteCard: React.FC<DeleteCardProps> = ({ invoiceId, onDelete }) => {
  return (
    <div className={styles.deleteCard}>
      <Text>Confirm Deletion</Text>
      <Text as="p">
        Are you sure you want to delete invoice #{invoiceId}? This action cannot
        be undone.
      </Text>
      <div className={styles.actions}>
        <Button variant="primary" size="small" onClick={() => onDelete("")}>
          Cancel
        </Button>
        <Button
          size="small"
          variant="danger"
          onClick={() => onDelete(invoiceId)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteCard;
