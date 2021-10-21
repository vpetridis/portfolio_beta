import React, { useEffect, useRef, useState } from "react";
import "./_section.css";

const Section = ({ children, sectionArea, title, Info }) => {
  const ref = useRef();
  const [mouseEntered, setMouseEntered] = useState();
  const [mouseLeft, setMouseLeft] = useState();

  useEffect(() => {
    const el = ref.current;
    el.addEventListener("mouseenter", () => {
      setMouseEntered(true);
      setMouseLeft(false);
    });
    el.addEventListener("mouseleave", () => {
      setMouseEntered(false);
      setMouseLeft(true);
    });
    return () => {
      el.removeEventListener("mouseenter", setMouseEntered(false));
      el.removeEventListener("mouseleave", setMouseEntered(false));
    };
  }, [ref]);

  return (
    <section
      ref={ref}
      className={`section-container ${sectionArea} ${
        mouseEntered && "mouse-entered expand-section"
      }`}
      style={{ flexBasis: mouseLeft && "100%" }}
      // FIXME onClick should toggle the other refs' state
      onClick={() => setMouseEntered(true)}
    >
      <h5 className={`section--title ${mouseEntered && "title-move"}`}>
        {title}
      </h5>
      {mouseEntered && children}
    </section>
  );
};

export default Section;
