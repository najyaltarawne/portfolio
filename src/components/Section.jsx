import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section__head">
          <h2 className="h2">{title}</h2>
          {subtitle ? <p className="sub">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
