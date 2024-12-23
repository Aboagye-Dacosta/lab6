import React from "react";
import { BadgeProps } from "./badge.types";
import styles from "./badge_sytles.module.css";

const BADGE_STATES = {
  pending: "Pending",
  paid: "Paid",
  draft: "Draft",
} as const;

type BadgeState = keyof typeof BADGE_STATES;

const Badge: React.FC<BadgeProps> = ({ state = "pending" }) => {
  const label = BADGE_STATES[state as BadgeState];

  return (
    <div className={`${styles.badge} ${styles["badge-" + state]}`}>
      <div
        className={`${styles["badge-indicator"]} ${
          styles[`badge-${state}-indicator`]
        }`}
      />
      <span className={styles[`badge-${state}-text`]}>{label}</span>
    </div>
  );
};

export default Badge;
