import Navbar from "./components/navbar/Navbar";

import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Education from "./sections/education/Education";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
