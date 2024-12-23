export interface DialogOverlayProps {
  isOpen: boolean;
  overlayOpacity?: number;
  zIndex?: number;
  onClose: () => void;
  children?: React.ReactNode;
}