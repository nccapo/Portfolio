import { useLocation } from "react-router-dom";

export const Page404 = () => {
  const location = useLocation();

  return (
    <div>
      <div className="line">
        <span className="green">$</span> stat {location.pathname}
      </div>
      <div className="line red">
        {`stat: cannot stat '${location.pathname}': No such file or directory`}
      </div>
      <div className="line">&nbsp;</div>

      <pre className="ascii-art amber">{String.raw`
  _  _    ___  _  _
 | || |  / _ \| || |
 | || |_| | | | || |_
 |__   _| |_| |__   _|
    |_|  \___/   |_|
`}</pre>

      <div className="line">
        {"the page you tried to reach isn't on this filesystem."}
      </div>
      <div className="line dim">&nbsp;</div>

      <div className="line">try one of:</div>
      <div className="help-grid">
        <span className="k">[1]</span>
        <span className="c">/</span>
        <span className="d">return home</span>

        <span className="k">[2]</span>
        <span className="c">/about</span>
        <span className="d">about me</span>

        <span className="k">[3]</span>
        <span className="c">/projects</span>
        <span className="d">projects</span>

        <span className="k">[4]</span>
        <span className="c">/contact</span>
        <span className="d">contact</span>
      </div>

      <div className="line dim">{"// or press ESC to go back to ~/"}</div>
    </div>
  );
};
