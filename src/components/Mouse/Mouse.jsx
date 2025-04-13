import styles from "./mouse.module.css";
import React, { forwardRef } from "react";

function Mouse(props, ref) {
  return <div ref={ref} {...props} className={styles.mouse}></div>;
}

export default forwardRef(Mouse);
