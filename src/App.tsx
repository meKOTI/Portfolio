import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Contact from "./sections/contact/Contact";
import ProjectDetails from "./pages/project/ProjectDetails";

function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="presentation">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
