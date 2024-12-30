import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteInvoice,
  getInvoiceById,
} from "../../../store/slice/app_invoice_slice";
import { useAppDispatch, useAppSelector } from "../../../store/store_hooks";

import Button from "../../atoms/button/Button.component";
import Container from "../../atoms/container/Container.component";

import { getTheme } from "../../../store/slice/app_theme_slice";
import { ProductStatus } from "../../../types/invoice_item.types";
import DeleteCard from "../../molecules/delete_card/DeleteCard.component";
import DialogOverlay from "../../molecules/dialog_overlay/DialogOverlay.component";
import styles from "./invoice_detail_footer_styles.module.css";

const InvoiceDetailFooter: React.FC = () => {
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
    <div className={styles.invoice_footer}>
      <Container>
        <div className={styles.invoice_detail_header}>
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
            theme={theme}
            isOpen={isDeleteInvoice}
            onClose={() => setIsDeleteInvoice(false)}
          >
            <DeleteCard
              theme={theme}
              onClose={() => setIsDeleteInvoice(false)}
              invoiceId={invoiceId as string}
              onDelete={handleDeleteInvoice}
            />
          </DialogOverlay>
        )}
      </Container>
    </div>
  );
};

export default InvoiceDetailFooter;
