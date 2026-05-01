import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Terminal } from "./components/terminal/Terminal";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Page404 } from "./components/404Page/404Page";

function App() {
  return (
    <BrowserRouter>
      <Terminal>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Terminal>
    </BrowserRouter>
  );
}

export default App;
