import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Wrap each Card in its own observer so cards in a grid
 * stagger naturally as they enter the viewport.
 */
export function Card({ children, delay = 0 }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`card reveal reveal--up ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }) {
  return <div className="card__title">{children}</div>;
}

export function CardTag({ children }) {
  return <div className="card__tag">{children}</div>;
}

export function CardText({ children }) {
  return <div className="card__text">{children}</div>;
}

export function CardLinks({ links = [] }) {
  if (!links.length) return null;
  return (
    <div className="card__links">
      {links.map((l) => (
        <a key={l.href} className="card__link" href={l.href} target="_blank" rel="noreferrer">
          {l.label} →
        </a>
      ))}
    </div>
  );
}
