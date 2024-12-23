export type DropDownStrategy = "single" | "multiple";

export interface DropDownMenuProps {
    strategy?: DropDownStrategy;
    label: string;
    options: string[];
    selectedOption: string[];
    setSelectedOption: (options: string[]) => void;
}