import styles from "./main.module.css";
import Mouse from "../Mouse/Mouse";
import Hero from "../Hero/Hero";
import React, { useRef, useEffect } from "react";

function Main() {
  const mouseRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (mouseRef.current) {
        mouseRef.current.classList.remove(styles.linkHover);
        let scale = 1;
        let mouseHeight = mouseRef.current.offsetHeight;
        let mouseWidth = mouseRef.current.offsetWidth;
        let clientX = event.pageX;
        let clientY = event.pageY;

        const target = document.elementFromPoint(clientX, clientY);
        if (target.tagName == "A") {
          mouseRef.current.classList.add(styles.linkHover);
          scale *= 2;
        }

        mouseRef.current.style.transition = "transform 25ms ease-out";
        mouseRef.current.style.transform = `translate(${
          clientX - mouseWidth / 2
        }px,${clientY - mouseHeight / 2}px) scale(${scale})`;
      }
    };

    if (mainRef.current) {
      mainRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (mainRef.current)
        mainRef.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <Mouse ref={mouseRef}></Mouse>
      <Hero></Hero>
    </main>
  );
}

export default Main;
