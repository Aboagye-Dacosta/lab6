export interface CheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  [key: string]: unknown;
}