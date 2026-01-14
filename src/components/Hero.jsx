import React from "react";




export default function Hero({ profile }) {
  const { name, headline, location, email, links, highlights } = profile;

  return (
    <section className="hero" id="top">
    

      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__left">
          <div className="chip">Available for Work • Internships • Collaboration</div>

          <h1 className="h1">
            {name}
            <span className="h1__glow">.</span>
          </h1>

          <p className="lead">{headline}</p>

          <div className="meta">
            <span className="meta__item">📍 {location}</span>
            <a className="meta__item link" href={`mailto:${email}`}>
              ✉️ {email}
            </a>
          </div>

          <div className="hero__cta">
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
            <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <button
              className="btn btn--soft"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              See Projects
            </button>
          </div>
        </div>

        <div className="hero__right">
          <div className="glass">
            <div className="glass__title">Quick stats</div>
            <div className="stats">
              {highlights.map((h) => (
                <div className="stat" key={h.label}>
                  <div className="stat__label">{h.label}</div>
                  <div className="stat__value">{h.value}</div>
                </div>
              ))}
            </div>
            <div className="divider" />
            <div className="mini">
              <div className="mini__title">What I like doing</div>
              <div className="mini__text">
                Full stack apps, database systems, and concurrency projects that need real logic.
              </div>
            </div>
          </div>

          <div className="badgeRow" aria-hidden="true">
            <span className="badge">PostgreSQL</span>
            <span className="badge">React</span>
            <span className="badge">C++</span>
            <span className="badge">CSS</span>
            <span className="badge">HTML</span>
            <span className="badge">Algorithms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
