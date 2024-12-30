import { Control } from "react-hook-form";
import { ProductStatus } from "../../../types/invoice_item.types";

export interface ControlledSelectProps {
    control: Control<ProductStatus> | undefined;
    message: string;
    name:  keyof ProductStatus;
    onChange?: (value: string) => void;
}