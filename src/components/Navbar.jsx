import React, { useEffect, useMemo, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" }
];

export default function Navbar({ name, links }) {
  const [active, setActive] = useState("about");

  const observers = useMemo(() => new Map(), []);

  useEffect(() => {
    const ids = items.map((x) => x.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [observers]);

  function jumpTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <button className="brand" onClick={() => jumpTo("top")} aria-label="Go to top">
          <span className="brand__dot" />
          <span className="brand__name">{name}</span>
        </button>

        <nav className="nav__links" aria-label="Primary navigation">
          {items.map((it) => (
            <button
              key={it.id}
              className={`nav__link ${active === it.id ? "is-active" : ""}`}
              onClick={() => jumpTo(it.id)}
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="nav__right">
          <a className="pill" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="pill pill--ghost" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
