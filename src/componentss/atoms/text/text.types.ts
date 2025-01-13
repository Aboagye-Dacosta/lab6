import { Color, Sizes, Weight } from "../../../types/app_typography.types";

export type TextVariant = 'p' | 'span' | 'div' | 'label' | 'caption';

export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps {
    color?: Color,
    weight?: Weight,
    as?: TextVariant,
    size?: Sizes
    className?: string;
    align?: TextAlign;
}