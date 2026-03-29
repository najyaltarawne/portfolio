import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Section({ id, title, subtitle, children }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.08, rootMargin: "-30px" });

  return (
    <section className="section" id={id}>
      <div className="container">
        <div
          ref={ref}
          className={`section__head reveal reveal--up ${visible ? "is-visible" : ""}`}
        >
          <h2 className="h2">{title}</h2>
          {subtitle ? <p className="sub">{subtitle}</p> : null}
        </div>

        {/* Wrap children so they stagger in after the header */}
        <div className={`reveal reveal--up reveal--delay ${visible ? "is-visible" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
