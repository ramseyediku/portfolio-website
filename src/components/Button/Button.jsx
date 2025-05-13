import styles from "./button.module.css";
import React, { useRef, useEffect } from "react";

function Button() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleButtonHover = (event) => {
      buttonRef.current.style.backgroundColor = "black";
    };

    const handleButtonMouseOut = (event) => {
      buttonRef.current.style.backgroundColor = "black";
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseover", handleButtonHover);
      buttonRef.current.addEventListener("mouseout", handleButtonMouseOut);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.removeEventListener("mouseover", handleButtonHover);
        buttonRef.current.addEventListener("mouseout", handleButtonMouseOut);
      }
    };
  }, []);

  return (
    <a ref={buttonRef} className={styles.button} href="#">
      Button
    </a>
  );
}

export default Button;
