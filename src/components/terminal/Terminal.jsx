/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ROUTES = [
  { key: "1", path: "/", label: "home" },
  { key: "2", path: "/about", label: "about" },
  { key: "3", path: "/projects", label: "projects" },
  { key: "4", path: "/contact", label: "contact" },
];

const COMMAND_ALIASES = {
  "/": "/",
  home: "/",
  "cd ~": "/",
  "cd /": "/",
  about: "/about",
  "cd about": "/about",
  "/about": "/about",
  projects: "/projects",
  "ls projects": "/projects",
  "cd projects": "/projects",
  "/projects": "/projects",
  contact: "/contact",
  "cd contact": "/contact",
  "/contact": "/contact",
  "1": "/",
  "2": "/about",
  "3": "/projects",
  "4": "/contact",
};

export const Terminal = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [historyCursor, setHistoryCursor] = useState(-1);
  const [bootDone, setBootDone] = useState(false);

  const inputRef = useRef(input);
  inputRef.current = input;

  const currentRoute = useMemo(
    () => ROUTES.find((r) => r.path === location.pathname),
    [location.pathname]
  );
  const currentLabel = currentRoute ? currentRoute.label : "404";

  useEffect(() => {
    const t = setTimeout(() => setBootDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  // disable mouse: swallow clicks, contextmenu, dblclick, mousedown
  useEffect(() => {
    const swallow = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    window.addEventListener("click", swallow, true);
    window.addEventListener("dblclick", swallow, true);
    window.addEventListener("contextmenu", swallow, true);
    window.addEventListener("auxclick", swallow, true);
    window.addEventListener("mousedown", swallow, true);
    return () => {
      window.removeEventListener("click", swallow, true);
      window.removeEventListener("dblclick", swallow, true);
      window.removeEventListener("contextmenu", swallow, true);
      window.removeEventListener("auxclick", swallow, true);
      window.removeEventListener("mousedown", swallow, true);
    };
  }, []);

  // clear transient error on route change
  useEffect(() => {
    setError("");
  }, [location.pathname]);

  useEffect(() => {
    const runCommand = (raw) => {
      if (!raw) return;
      setHistory((h) => [...h, raw]);
      setHistoryCursor(-1);
      setInput("");

      const cmd = raw.toLowerCase();

      if (cmd === "clear" || cmd === "cls") {
        setError("");
        return;
      }
      if (cmd === "help" || cmd === "?" || cmd === "man") {
        navigate("/");
        setError("");
        return;
      }
      if (cmd === "whoami") {
        setError("nika");
        return;
      }
      if (cmd === "ls" || cmd === "ls -la" || cmd === "dir") {
        setError(
          "drwxr-xr-x  home  about  projects  contact  (use number key or type the name)"
        );
        return;
      }
      if (cmd === "exit" || cmd === "logout" || cmd === "quit") {
        setError("nice try — this session is read-only.");
        return;
      }

      const target = COMMAND_ALIASES[cmd];
      if (target) {
        navigate(target);
        setError("");
        return;
      }

      setError(`-bash: ${raw}: command not found  (try help)`);
    };

    const handler = (e) => {
      if (e.ctrlKey || e.metaKey) return;

      if (e.key === "Enter") {
        e.preventDefault();
        runCommand(inputRef.current.trim());
        return;
      }

      if (e.key === "Backspace") {
        e.preventDefault();
        setInput((s) => s.slice(0, -1));
        return;
      }

      if (e.key === "Escape") {
        e.preventDefault();
        setInput("");
        setError("");
        navigate("/");
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const partial = inputRef.current.toLowerCase();
        if (!partial) return;
        const match = ROUTES.find((r) => r.label.startsWith(partial));
        if (match) setInput(match.label);
        return;
      }

      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        const idx = ROUTES.findIndex((r) => r.path === location.pathname);
        const safeIdx = idx === -1 ? 0 : idx;
        const dir = e.key === "ArrowLeft" ? -1 : 1;
        const next = (safeIdx + dir + ROUTES.length) % ROUTES.length;
        navigate(ROUTES[next].path);
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length === 0) return;
        const next = Math.min(historyCursor + 1, history.length - 1);
        setHistoryCursor(next);
        setInput(history[history.length - 1 - next] || "");
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.max(historyCursor - 1, -1);
        setHistoryCursor(next);
        setInput(next === -1 ? "" : history[history.length - 1 - next]);
        return;
      }

      // Number shortcut works only when buffer is empty so commands like "1" still type
      if (/^[1-4]$/.test(e.key) && inputRef.current === "") {
        e.preventDefault();
        const route = ROUTES.find((r) => r.key === e.key);
        if (route) navigate(route.path);
        return;
      }

      if (e.key.length === 1) {
        e.preventDefault();
        setInput((s) => s + e.key);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [history, historyCursor, location.pathname, navigate]);

  return (
    <div className="terminal-root">
      <div className="crt-vignette" />
      <div className="crt-flicker" />
      <div className="crt-scanlines" />

      <div className="terminal-frame">
        <div className="terminal-header">
          <span>
            <span className="led" />
            nika.os v1.0 — tty1
          </span>
          <span className="dim">
            {bootDone ? "session: guest" : "booting…"} · {currentLabel}
          </span>
        </div>

        <div className="terminal-content">{children}</div>

        {error && <div className="error-line">{error}</div>}

        <div className="terminal-prompt">
          <span className="prompt-prefix">guest@nika.os</span>
          <span className="prompt-path">:~/{currentLabel}$</span>
          <span className="prompt-input">{input}</span>
          <span className="cursor" aria-hidden="true" />
        </div>

        <div className="terminal-footer">
          <span><span className="key">[1]</span> home</span>
          <span><span className="key">[2]</span> about</span>
          <span><span className="key">[3]</span> projects</span>
          <span><span className="key">[4]</span> contact</span>
          <span><span className="key">←/→</span> cycle</span>
          <span><span className="key">ESC</span> ~/</span>
          <span><span className="key">TAB</span> autocomplete</span>
          <span><span className="key">↑/↓</span> history</span>
          <span className="dim">{'type "help" + Enter'}</span>
        </div>
      </div>
    </div>
  );
};
