import { Color, Sizes, Weight } from "../../../types/app_typography.types";

export type HeadlineVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';


export interface HeadLineProps {
    as: HeadlineVariant;
    color?: Color;
    className?: string;
    weight?: Weight;
    size?: Sizes;
}