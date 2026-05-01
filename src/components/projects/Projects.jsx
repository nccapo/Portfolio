const PROJECTS = [
  {
    name: "chat-app",
    perm: "drwxr-xr-x",
    desc: "Real-time chat with auth, rooms and presence.",
    stack: ["React", "Vite", "Node.js", "Socket.IO", "MongoDB", "Redux"],
    git: "github.com/Nicolas-ggd/chat",
    web: "nicolas-ggd-chat.netlify.app",
  },
  {
    name: "covid-api",
    perm: "drwxr-xr-x",
    desc: "Dashboard pulling COVID-19 stats with a typed API layer.",
    stack: ["React", "Vite", "Node.js", "TypeScript", "MongoDB"],
    git: "github.com/Nicolas-ggd/covid-ts",
    web: "ggd-covid19.netlify.app",
  },
  {
    name: "movies-app",
    perm: "drwxr-xr-x",
    desc: "Movie browser built on top of a public catalog API.",
    stack: ["Next.js"],
    git: "github.com/Nicolas-ggd/movies-app",
    web: "nicolas-ggd-movies.netlify.app",
  },
  {
    name: "cooking-orders",
    perm: "drwxr-xr-x",
    desc: "Restaurant order flow with admin & kitchen views.",
    stack: ["React", "Vite", "Node.js", "MongoDB", "TypeScript"],
    git: "github.com/Nicolas-ggd/restaurant-order",
    web: "order-ggd.netlify.app",
  },
  {
    name: "ggd-cli",
    perm: "-rwxr-xr-x",
    desc: "Command-line tool published to npm.",
    stack: ["Node.js"],
    git: "github.com/Nicolas-ggd/CLI",
    web: "npmjs.com/package/ggd-cli",
  },
  {
    name: "social-auth",
    perm: "drwxr-xr-x",
    desc: "Social login flow using NextAuth across providers.",
    stack: ["Next.js", "NextAuth", "TypeScript"],
    git: "github.com/Nicolas-ggd/social-platform-auth",
    web: "ggd-social-auth.netlify.app",
  },
];

export const Projects = () => {
  return (
    <div>
      <div className="line">
        <span className="green">$</span> ls -la ~/projects
      </div>

      <div className="line dim">total {PROJECTS.length}</div>
      {PROJECTS.map((p) => (
        <div className="list-row" key={p.name}>
          <span className="perm">{p.perm}</span>
          <span className={`name ${p.perm.startsWith("d") ? "dir" : "exec"}`}>
            {p.name}
            {p.perm.startsWith("d") ? "/" : ""}
          </span>
        </div>
      ))}
      <div className="line">&nbsp;</div>

      <div className="line">
        <span className="green">$</span> for d in *; do cat $d/README.md; done
      </div>

      {PROJECTS.map((p) => (
        <div className="project-block" key={`b-${p.name}`}>
          <div>
            <span className="pname">~/{p.name}</span>
          </div>
          <div className="line">{p.desc}</div>
          <div className="ptags">
            stack: {p.stack.join(" · ")}
          </div>
          <div className="pmeta">
            git: {p.git}
          </div>
          <div className="pmeta">
            url: {p.web}
          </div>
        </div>
      ))}

      <div className="line dim">
        {"// mouse navigation is disabled — copy any URL by reading it. press [4] for contact info if you'd like the source links sent to you."}
      </div>
    </div>
  );
};
