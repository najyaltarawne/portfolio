import React from "react";

export function Card({ children }) {
  return <div className="card">{children}</div>;
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
