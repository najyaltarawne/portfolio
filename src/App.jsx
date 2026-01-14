// builds the page 


import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import { Card, CardLinks, CardTag, CardText, CardTitle } from "./components/Cards.jsx";
import { profile } from "./data/profile.js"; // const profile 


function PillRow({ items }) { //helper , const items = props.items;
  return (
    <div className="pillRow">
      
      {items.map((x) => ( //loops through the array using .map()
      
      //each item x, it creates a <span> pill
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

      <Section
        id="about"
        title="About"
        
      >
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
              <li> Learning software engineering fundamentals & strong architecture</li>
              <li>Study design patterns, system architecture</li>
              <li>Improve efficiency in completing features, contributing to larger projects</li>
              <li>Clean UI that still respects performance</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="The tools I’m comfortable shipping with.">
        <div className="grid3">
          <Card>
            <CardTitle>Languages</CardTitle>
            <PillRow items={profile.skills.languages} />
          </Card>

          <Card>
            <CardTitle>Web</CardTitle>
            <PillRow items={profile.skills.web} />
          </Card>

          <Card>
            <CardTitle>Databases</CardTitle>
            <PillRow items={profile.skills.databases} />
          </Card>

          <Card>
            <CardTitle>Systems</CardTitle>
            <PillRow items={profile.skills.systems} />
          </Card>

          <Card>
            <CardTitle>Tools</CardTitle>
            <PillRow items={profile.skills.tools} />
          </Card>

          <Card>
            <CardTitle>Bonus</CardTitle>
            <div className="card__text">
              Math minor mindset: I like proofs, correctness, and “why it works,” not just “it works.”
            </div>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="A few things I’ve built (and the kind of problems I enjoy).">
        <div className="grid2">
          {profile.projects.map((p) => (
            <Card key={p.title}>
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
          {profile.experience.map((e) => (
            <Card key={e.title}>
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

          <Card>
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

      <Section id="education" title="Education" subtitle="Where I’m building the foundation.">
        <div className="grid2">
          {profile.education.map((ed) => (
            <Card key={ed.school}>
              <CardTitle>{ed.school}</CardTitle>
              <CardTag>{ed.degree}</CardTag>
              <CardText>{ed.details}</CardText>
            </Card>
          ))}
        </div>

        <div className="callout">
          
          <div className="callout__text">
          Feel free to connect with me !! 
          </div>
        </div>
      </Section>

     
    </div>
  );
}
