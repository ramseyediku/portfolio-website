import styles from "./hero.module.css";
import Button from "../Button/Button";
import React, { useRef, useEffect } from "react";

function Hero() {
  return (
    <section className={styles.hero} href="#">
      <h1>Aspiring Developer</h1>
      <Button />
    </section>
  );
}

export default Hero;
