import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToolButtonPropsType } from "@/utils/types/toolbutton";

import styles from "./toolbutton.module.css";
import { classNames } from "@/utils/helpers/css";

export default function ToolButton({
  icon,
  label,
  handler,
  transparent = false
}: ToolButtonPropsType) {
  return (
    <button 
      className={classNames(
        styles.toolBtn, 
        icon && !label ? styles.icon : styles.normal,
        transparent && styles.transparent
      )} 
      onClick={handler}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
}