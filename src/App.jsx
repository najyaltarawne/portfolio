import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import { Card, CardLinks, CardTag, CardText, CardTitle } from "./components/Cards.jsx";
import { profile } from "./data/profile.js";

function PillRow({ items }) {
  return (
    <div className="pillRow">
      {items.map((x) => (
        <span className="pillItem" key={x}>
          {x}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar name={profile.name} links={profile.links} />
      <Hero profile={profile} />

      <Section id="about" title="About">
        <div className="grid2">
          <div className="stack">
            {profile.about.map((p, i) => (
              <p className="p" key={i}>
                {p}
              </p>
            ))}
          </div>

          <div className="panel">
            <div className="panel__title">Current focus</div>
            <ul className="list">
              <li>Learning software engineering fundamentals & strong architecture</li>
              <li>Study design patterns, system architecture</li>
              <li>Improve efficiency in completing features, contributing to larger projects</li>
              <li>Clean UI that still respects performance</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="The tools I'm comfortable with, eager to learn more.">
        <div className="grid3">
          {/* Stagger each skill card by 80ms */}
          <Card delay={0}>
            <CardTitle>Languages</CardTitle>
            <PillRow items={profile.skills.languages} />
          </Card>

          <Card delay={80}>
            <CardTitle>Web</CardTitle>
            <PillRow items={profile.skills.web} />
          </Card>

          <Card delay={160}>
            <CardTitle>Databases</CardTitle>
            <PillRow items={profile.skills.databases} />
          </Card>

          <Card delay={240}>
            <CardTitle>Systems</CardTitle>
            <PillRow items={profile.skills.systems} />
          </Card>

          <Card delay={320}>
            <CardTitle>Tools</CardTitle>
            <PillRow items={profile.skills.tools} />
          </Card>

          <Card delay={320}>
            <CardTitle>dataScience</CardTitle>
            <PillRow items={profile.skills.tools} />
          </Card>

          <Card delay={400}>
            <CardTitle>Bonus</CardTitle>
            <div className="card__text">
              Math minor mindset: I like proofs, correctness, and "why it works," not just "it works."
            </div>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="A few things I've built (and the kind of problems I enjoy).">
        <div className="grid2">
          {profile.projects.map((p, i) => (
            <Card key={p.title} delay={i * 100}>
              <div className="rowBetween">
                <CardTitle>{p.title}</CardTitle>
                <CardTag>{p.tag}</CardTag>
              </div>
              <CardText>{p.description}</CardText>
              <CardLinks links={p.links} />
            </Card>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Where I learned to build with discipline.">
        <div className="grid2">
          {profile.experience.map((e, i) => (
            <Card key={e.title} delay={i * 100}>
              <div className="rowBetween">
                <CardTitle>{e.title}</CardTitle>
                <CardTag>{e.period}</CardTag>
              </div>
              <div className="card__text dim">{e.company}</div>
              <ul className="list">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}

          <Card delay={profile.experience.length * 100}>
            <CardTitle>What people get from me</CardTitle>
            <ul className="list">
              <li>Clear communication + teamwork</li>
              <li>Structured problem solving</li>
              <li>Clean, readable code (I like simplifying)</li>
              <li>Strong database + systems instincts</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="education" title="Education" subtitle="Where I'm building the foundation.">
        <div className="grid2">
          {profile.education.map((ed, i) => (
            <Card key={ed.school} delay={i * 100}>
              <CardTitle>{ed.school}</CardTitle>
              <CardTag>{ed.degree}</CardTag>
              <CardText>{ed.details}</CardText>
            </Card>
          ))}
        </div>

        <div className="callout">
          <div className="callout__text">Feel free to connect with me !!</div>
        </div>
      </Section>
    </div>
  );
}
