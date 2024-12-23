import React, { PropsWithChildren } from "react";
import { getTheme } from "../../../store/slice/app_theme_slice";
import { useAppSelector } from "../../../store/store_hooks";
import Icon from "../icon/Icon.component";
import { ButtonProps } from "./button.types";
import styles from "./button_styles.module.css";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
}) => {
  const { theme } = useAppSelector(getTheme);
  return (
    <button
      onClick={onClick}
      className={`${styles["button-" + variant + "-" + theme]} ${
        styles["button-" + size]
      }`}
    >
      {icon && <Icon name={icon} src={icon} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
