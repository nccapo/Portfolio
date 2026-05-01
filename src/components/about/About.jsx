const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.IO",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "Hypercubic Innovation Center",
    year: "2023",
  },
  {
    role: "Intern",
    company: "CASATRADE",
    year: "2022",
  },
];

export const About = () => {
  return (
    <div>
      <div className="line">
        <span className="green">$</span> cat about.txt
      </div>

      <div className="section-title">{"// IDENTITY"}</div>
      <div className="kv">
        <span className="k">name</span>
        <span className="v">Nika Gogitidze</span>

        <span className="k">role</span>
        <span className="v">Web Developer</span>

        <span className="k">location</span>
        <span className="v">Tbilisi, Georgia</span>

        <span className="k">motto</span>
        <span className="v">make it work, make it right, make it fast.</span>
      </div>

      <div className="line">
        {"Hi — I'm a developer who likes shipping web apps and learning the things I don't know yet. I work mostly across React, Node and the bits in between."}
      </div>
      <div className="line">&nbsp;</div>

      <div className="line">
        <span className="green">$</span> ls ~/skills
      </div>
      <div className="section-title">{"// SKILLS"}</div>
      <div className="line cyan">
        {SKILLS.map((s, i) => (
          <span key={s}>
            {s}
            {i < SKILLS.length - 1 ? "  ·  " : ""}
          </span>
        ))}
      </div>
      <div className="line">&nbsp;</div>

      <div className="line">
        <span className="green">$</span> cat ~/experience.log
      </div>
      <div className="section-title">{"// EXPERIENCE"}</div>
      {EXPERIENCE.map((e) => (
        <div className="line" key={e.company}>
          <span className="amber">{e.year}</span>
          <span className="dim">  ::  </span>
          <span className="white">{e.role}</span>
          <span className="dim">  @  </span>
          <span className="cyan">{e.company}</span>
        </div>
      ))}
      <div className="line">&nbsp;</div>

      <div className="line dim">
        press [3] to view projects, [4] for contact, ESC for home.
      </div>
    </div>
  );
};
