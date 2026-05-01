export const Contact = () => {
  return (
    <div>
      <div className="line">
        <span className="green">$</span> finger nika@nika.os
      </div>

      <div className="section-title">{"// CONTACT"}</div>
      <div className="kv">
        <span className="k">name</span>
        <span className="v">Nika Gogitidze</span>

        <span className="k">role</span>
        <span className="v">Web Developer</span>

        <span className="k">location</span>
        <span className="v">Tbilisi, Georgia (UTC+04:00)</span>

        <span className="k">github</span>
        <span className="v">github.com/Nicolas-ggd</span>

        <span className="k">portfolio</span>
        <span className="v">nicolas-ggd.netlify.app</span>

        <span className="k">email</span>
        <span className="v">nika.gogitidze.dev@gmail.com</span>

        <span className="k">status</span>
        <span className="v green">{"// open to new opportunities"}</span>
      </div>

      <div className="line">
        <span className="green">$</span> {'echo "say hi" > ~/inbox'}
      </div>
      <div className="line">
        Drop a line any time — I read everything that lands in the inbox above.
      </div>
      <div className="line">&nbsp;</div>

      <div className="line dim">
        {"// links are read-only on this terminal. type them in your own browser or copy from the screen."}
      </div>
      <div className="line dim">
        press [1] for home, [2] for about, [3] for projects, ESC for ~/.
      </div>
    </div>
  );
};
