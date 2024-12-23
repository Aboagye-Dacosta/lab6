import { useEffect, useRef, useState } from "react";
import Checkbox from "../../atoms/checkbox/Checkbox.component";
import Text from "../../atoms/text/Text.component";
import { DropDownMenuProps } from "./drop_down_menu.types";
import styles from "./drop_down_menu_styles.module.css";

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  label,
  options,
  selectedOption,
  strategy = "single",
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (options: string[]) => {
    setSelectedOption(options);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const option = e.target.id;
    const newSelectedOptions = e.target.checked
      ? [...selectedOption, option]
      : selectedOption.filter((selected) => selected !== option);
    setSelectedOption(newSelectedOptions);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      data-state={isOpen ? "open" : "closed"}
      className={styles.dropdown}
      role="menu"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        className={styles.dropdownToggle}
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className={styles.dropdownToggleContent}>
          <Text color="theme-black" size="text-xs">
            {!selectedOption?.length  ? label : selectedOption?.join(", ")}
          </Text>
        </div>
        <img
          src="/assets/icon-arrow-down.svg"
          alt=""
          className={styles.dropdownToggleIcon}
          aria-label="Open dropdown menu"
        />
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu} role="none">
          <div className={styles.dropdownMenuContent} role="menu">
            {options.map((option) => {
              if (strategy === "single") {
                return (
                  <button
                    key={option}
                    role="menuitem"
                    onClick={() => handleSelectOption([option])}
                    className={styles.dropdownMenuOption}
                    tabIndex={0}
                  >
                    <Text color="theme-black" size="text-sm">
                      {option}
                    </Text>
                  </button>
                );
              }

              if (strategy === "multiple") {
                return (
                  <label
                    htmlFor={option}
                    key={option}
                    className={`${styles.dropdownMenuOption} ${styles.dropdownMenuOptionMultiple}`}
                  >
                    <Checkbox
                      checked={selectedOption.includes(option)}
                      onChange={handleChange}
                      id={option}
                    />
                    {option}
                  </label>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
