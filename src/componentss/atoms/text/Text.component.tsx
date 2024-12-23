import { PropsWithChildren } from "react";
import { TextProps } from "./text.types";
import styles from "./text_styles.module.css";

const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  color = "base-black",
  as = "span",
  weight = "regular",
  size = "text-sm",
  className,
}) => {
  const Element = as;
  const combinedClasses = [`text-${color}`, styles[weight], size, className]
    .filter(Boolean)
    .join(" ");

  return <Element className={combinedClasses}>{children}</Element>;
};

export default Text;
