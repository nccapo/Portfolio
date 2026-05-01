const ASCII = String.raw`
 _   _ _ _         ____             _ _   _     _
| \ | (_) | ____ _/ ___| ___   __ _(_) |_(_) __| | _______
|  \| | | |/ / _\` | |  _ / _ \ / _\` | | __| |/ _\` |/ _  / _ \
| |\  | |   < (_| | |_| | (_) | (_| | | |_| | (_| |\____/  __/
|_| \_|_|_|\_\__,_|\____|\___/ \__, |_|\__|_|\__,_|     \___|
                               |___/
`;

export const Home = () => {
  const date = new Date().toUTCString();

  return (
    <div>
      <pre className="ascii-art">{ASCII}</pre>

      <div className="line glow-strong">
        <span className="cyan">nika.os</span> v1.0.0 — terminal portfolio
      </div>
      <div className="line dim">last login: {date} on tty1</div>
      <div className="line">&nbsp;</div>

      <div className="boot-line">
        [<span className="ok">  OK  </span>] mounted /home/nika
      </div>
      <div className="boot-line">
        [<span className="ok">  OK  </span>] loaded module: react@18 · vite@4
      </div>
      <div className="boot-line">
        [<span className="ok">  OK  </span>] keyboard input service running
      </div>
      <div className="boot-line">
        [<span className="warn">  !!  </span>] mouse driver disabled by user policy
      </div>
      <div className="line">&nbsp;</div>

      <div className="line">
        <span className="green">$</span> whoami
      </div>
      <div className="line white glow-strong">
        Nika Gogitidze — Web Developer (Tbilisi, Georgia)
      </div>
      <div className="line">&nbsp;</div>

      <div className="line">
        <span className="green">$</span> help
      </div>
      <div className="section-title">AVAILABLE PAGES</div>
      <div className="help-grid">
        <span className="k">[1]</span>
        <span className="c">/</span>
        <span className="d">home — this screen, system info & help</span>

        <span className="k">[2]</span>
        <span className="c">/about</span>
        <span className="d">about me, skills, experience</span>

        <span className="k">[3]</span>
        <span className="c">/projects</span>
        <span className="d">{"portfolio of code I've shipped"}</span>

        <span className="k">[4]</span>
        <span className="c">/contact</span>
        <span className="d">how to reach me</span>
      </div>

      <div className="section-title">CONTROLS</div>
      <div className="help-grid">
        <span className="k">1 .. 4</span>
        <span className="c" />
        <span className="d">jump to a page</span>

        <span className="k">← →</span>
        <span className="c" />
        <span className="d">cycle through pages</span>

        <span className="k">ESC</span>
        <span className="c" />
        <span className="d">return to ~/ (home)</span>

        <span className="k">TAB</span>
        <span className="c" />
        <span className="d">autocomplete page name</span>

        <span className="k">↑ ↓</span>
        <span className="c" />
        <span className="d">previous / next command in history</span>

        <span className="k">type</span>
        <span className="c">about | projects | contact | help | clear | whoami | ls</span>
        <span className="d" />
      </div>

      <div className="line dim">
        {"// mouse is disabled. all navigation happens via the keyboard."}
      </div>
    </div>
  );
};
