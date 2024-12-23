import { BackgroundColor } from "../../../types/app_fill.types";

export type IconVariant = "circle" | "square" | "rectangle";
export type IconSizes = "x-small" | "small" | "medium" | "large" | "x-large";


export interface IconProps {
    src: string;
    name: string;
    variant?: IconVariant;
    fill?: BackgroundColor
    size?: IconSizes;
}