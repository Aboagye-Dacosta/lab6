export interface DeleteCardProps {
    invoiceId: string;
    onDelete: (id: string) => void;
    onClose: () => void;
    theme: "light" | "dark";
}
