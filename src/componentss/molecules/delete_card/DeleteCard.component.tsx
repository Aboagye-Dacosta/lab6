import { useRef } from "react";
import Button from "../../atoms/button/Button.component";
import { DeleteCardProps } from "./delete_card.types";
import styles from "./delete_card_styles.module.css";
const DeleteCard: React.FC<DeleteCardProps> = ({ invoiceId, onDelete, onClose, theme }) => {
  const ref = useRef(null)
  
  return (
    <div className={styles.deleteCard} ref={ref}>
      <h2 style={{
        color: theme === "light" ? "#0C0E16" : "#fff",
        fontWeight: "bold",
      }}   >Confirm Deletion</h2>
      <p style={
        {
          color: theme === "light" ? "#888EB0" : "#fefefe",
        }
      }>
        Are you sure you want to delete invoice #{invoiceId}? This action cannot
        be undone.
      </p>
      <div className={styles.actions}>
        <Button variant="primary" size="small" onClick={onClose}>
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
