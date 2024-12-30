import ReactDOM from "react-dom";
import { DialogOverlayProps } from "./dialog_overlay.types";
import styles from "./dialog_overlay_styles.module.css";

const DialogOverlay: React.FC<DialogOverlayProps> = ({
  isOpen,
  overlayOpacity = 0.5,
  zIndex = 1000,
  onClose,
  children,
  theme = "light",
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`${styles.dialogOverlay} bg-base-black`}
      style={{
        zIndex,
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
      }}
    >
      <div
        className={styles.dialogContent}
        style={{ backgroundColor: theme === "light" ? "#fff" : "#1E2139" }}
      >
        {children}
        <button
          className={styles.closeIcon}
          style={{ color: theme === "light" ? "#7E88C3" : "#fff" }}
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
