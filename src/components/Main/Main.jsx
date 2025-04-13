import styles from "./main.module.css";
import Mouse from "../Mouse/Mouse";
import React, { useRef, useEffect } from "react";

function Main() {
  const mouseRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (mouseRef.current) {
        let mouseHeight = mouseRef.current.offsetHeight;
        let mouseWidth = mouseRef.current.offsetWidth;
        mouseRef.current.style.transition = "transform 200ms ease-out";
        mouseRef.current.style.transform = `translate(${
          event.pageX - mouseWidth / 2
        }px,${event.pageY - mouseHeight / 2}px)`;
      }
    };

    if (mainRef.current)
      mainRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (mainRef.current)
        mainRef.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <Mouse ref={mouseRef}></Mouse>
    </main>
  );
}

export default Main;
