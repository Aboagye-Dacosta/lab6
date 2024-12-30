type ButtonVariant = "default" | "primary" | "danger" | "secondary" | "tertiary";

type ButtonSizes = "small" | "medium" | "large";

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSizes;
    icon?: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
}