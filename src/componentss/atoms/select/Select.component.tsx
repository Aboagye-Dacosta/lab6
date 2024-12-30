import SelectComponent from "react-select";
import { SelectProps } from "./select.types";

const Select: React.FC<SelectProps> = ({ styles, ...props }) => {
  return (
    <SelectComponent
      {...props}
      styles={{
        ...styles,
        container(base) {
          return {
            ...base,
            width: "100%",
          };
        },
        input: (styles) => ({
          ...styles,
          color: "var(--text-color)",
          width: "100%",
        }),
        control: (props) => ({
          ...props,
          backgroundColor: "var(--secondary-color)",
          color: "var(--text-color)",
          border: "none",
          boxShadow: "var(--shadow-md)",
          width: "100%",
        }),
        menu: (props) => ({
          ...props,
          backgroundColor: "var(--secondary-color)",
          color: "var(--text-color)",
          border: "none",
        }),
        option: (styles, { isSelected }) => ({
          ...styles,
          backgroundColor: isSelected
            ? "var(--primary-color)"
            : "var(--color-grey-0)",
          color: (() => "var(--text-color)")(),
          borderBottom: "1px solid black",
          ":hover": {
            backgroundColor: "var(--primary-color)",
            color: "#fff",
          },
        }),
        singleValue: (styles) => ({
          ...styles,
          color: "var(--text-color)",
          fontSize: "inherit",
          width: "100%",
        }),
      }}
    />
  );
};

export default Select;
