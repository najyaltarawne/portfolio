export const profile = {
    name: "Najy AlTarawne",
    headline: "Computer Science @ University of Houston • Math Minor • Future Software Engineer",
    location: "Amman, JO / Houston, TX ",
    email: "najyaltarawne@yahoo.com", 
    links: {
      github: "https://github.com/najyaltarawne",
      linkedin: "https://www.linkedin.com/in/najy-altarawne-19a464245", 
    },
  
    about: [
      "I’m a Computer Science student at the University of Houston with a strong interest in software engineering and building full stack applications.",
      "I love working in algorithms, systems programming, and database design. I also have a math minor",
      "I aim for clean, practical solutions and I like working in teams."
    ],
  
    highlights: [
      { label: "GPA", value: "3.82" },
      { label: "Focus", value: "Software Engineering" },
      { label: "Strengths", value: "Databases • Full stack • Systems" }
    ],
  
    skills: {
      languages: ["JavaScript", "C++", "SQL"],
      web: ["HTML", "CSS", "React"],
      databases: ["PostgreSQL", "Normalization (3NF/BCNF)", "ER Design"],
      systems: ["Sockets", "POSIX Threads", "Semaphores", "Unix IPC"],
      tools: ["GitHub", "Next,js"]
    },
  
    projects: [
      {
        title: "Phone Company Web Application",
        tag: "Full stack • PostgreSQL ",
        description:
          "Very simple database simulation with multiple tables (Customer, Payment, Call_Record, etc.), transaction + query processing, and  focus on database integrity and normalization.",
        links: [
          { label: "GitHub", href: "https://github.com/najyaltarawne/Phone-company-web-application" }
        ]
      },
      {
        title: "Library Database Normalization & Integrity Checker",
        tag: "Python • SQL Generation • PostgreSQL",
        description:
          "A Python program that generates SQL (CREATE/SELECT/DELETE) to check referential integrity and evaluate normalization (3NF/BCNF) from schema input files."
      },
      
        {
            title: "Developer Portfolio",
            tag: "React • JavaScript • Vite • Component Based UI",
            description:
              "A modern, component based portfolio application built with React and Vite, designed to present my projects, skills, and experience with a fast, responsive, and minimal user interface."
          }
    
    ],
  
    experience: [
      {
        title: "Computer Science Student",
        company: "University of Houston",
        period: " Dec 2024 — May 2026",
        bullets: [
          "Hands on projects in database design, web application development, and systems programming.",
          "Strong emphasis on correctness, structure, and performance."
        ]
      }
    ],
  
    education: [
      {
        school: "University of Houston",
        degree: "B.S. in Computer Science (Math Minor)",
        details: "GPA: 3.82 • Transfer Excellence Scholarship. Honors list"
      },
      {
        school: "Houston Community College",
        degree: "A.S. in Computer Science",
        details: "Completed before transferring to UH"
      }
    ]
  };
  