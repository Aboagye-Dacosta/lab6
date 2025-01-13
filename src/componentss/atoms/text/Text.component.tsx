import { PropsWithChildren } from "react";
import { TextProps } from "./text.types";

const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  color = "theme-black",
  as = "span",
  weight = "weight-400",
  size = "text-sm",
  className,
  align = "left",
}) => {
  const Element = as;
  const combinedClasses = [`text-${color}`, weight, size, className, align]
    .filter(Boolean)
    .join(" ");

  return <Element className={combinedClasses}>{children}</Element>;
};

export default Text;
