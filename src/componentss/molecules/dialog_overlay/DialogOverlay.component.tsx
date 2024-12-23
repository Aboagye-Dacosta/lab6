// DialogOverlay.tsx
import ReactDOM from "react-dom";
import { DialogOverlayProps } from "./dialog_overlay.types";
import styles from "./dialog_overlay_styles.module.css";

const DialogOverlay: React.FC<DialogOverlayProps> = ({
  isOpen,
  overlayOpacity = 0.5,
  zIndex = 1000,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.dialogOverlay}
      style={{
        zIndex,
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
      }}
    >
      <div className={styles.dialogContent}>
        {children}
        <button
          className={styles.closeIcon}
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default DialogOverlay;
