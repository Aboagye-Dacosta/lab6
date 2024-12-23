import { PropsWithChildren } from "react";
import { HeadLineProps } from "./head_line.types";
import styles from "./head_line_styles.module.css";

const Headline: React.FC<PropsWithChildren<HeadLineProps>> = ({
  children,
  as = "h1",
  color = "primary",
  className = "",
  weight = "weight-400",
}) => {
  const Element = as;
  const classes = [`text-${color}`, weight, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Element className={`${styles.headline} ${classes}`}>{children}</Element>
  );
};

export default Headline;
