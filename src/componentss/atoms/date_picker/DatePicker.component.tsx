import { DatePickerProps } from "./date_picker.types";

const DatePicker: React.FC<DatePickerProps> = ({
  defaultValue,
  name,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <input
      type="date"
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default DatePicker;
