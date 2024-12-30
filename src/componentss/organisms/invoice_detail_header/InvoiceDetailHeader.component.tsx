import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteInvoice,
  getInvoiceById,
} from "../../../store/slice/app_invoice_slice";
import { getTheme } from "../../../store/slice/app_theme_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";
import { ProductStatus } from "../../../types/invoice_item.types";
import Badge from "../../atoms/badge/Badge.component";
import { BadgeState } from "../../atoms/badge/badge.types";
import Button from "../../atoms/button/Button.component";
import Container from "../../atoms/container/Container.component";
import Text from "../../atoms/text/Text.component";
import DeleteCard from "../../molecules/delete_card/DeleteCard.component";
import DialogOverlay from "../../molecules/dialog_overlay/DialogOverlay.component";
import styles from "./invoice_detail_header_styles.module.css";

const InvoiceDetailHeader: React.FC = () => {
  const navigate = useNavigate();
  const { id: invoiceId } = useParams();
  const [isDeleteInvoice, setIsDeleteInvoice] = useState(false);
  const dispatch = useAppDispatch();
  const { status: invoiceStatus } = useAppSelector(
    getInvoiceById(invoiceId as string)
  ) as ProductStatus;
  const { theme } = useAppSelector(getTheme);
  const handleDeleteInvoice = () => {
    dispatch(deleteInvoice(invoiceId));
    navigate("/");
  };

  return (
    <Container>
      <div className={styles.invoice_detail_header}>
        <div className={styles.status}>
          <Text>Status</Text>
          <Badge state={invoiceStatus as BadgeState} />
        </div>
        <div className={styles.actions}>
          <Button size="small" variant="default" onClick={() => {}}>
            Edit
          </Button>
          <Button
            size="small"
            variant="danger"
            onClick={() => setIsDeleteInvoice(true)}
          >
            Delete
          </Button>

          {invoiceStatus != "paid" && (
            <Button size="medium" variant="primary" onClick={() => {}}>
              Mark as Paid
            </Button>
          )}
        </div>
      </div>
      {isDeleteInvoice && (
        <DialogOverlay
          isOpen={isDeleteInvoice}
          theme={theme}
          onClose={() => setIsDeleteInvoice(false)}
        >
          <DeleteCard
            theme="light"
            onClose={() => setIsDeleteInvoice(false)}
            invoiceId={invoiceId as string}
            onDelete={handleDeleteInvoice}
          />
        </DialogOverlay>
      )}
    </Container>
  );
};

export default InvoiceDetailHeader;
