import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Make sure the Navbar path is correct
import About from "./components/About";  // Assuming you have these components
import Projects from "./components/Projects";  // Same for Projects
import Skills from "./components/Skills";  // Assuming you have a Skills component
import Contact from "./components/Contact";  // Assuming you have a Contact component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="ml-64"> {/* This ensures the content isn't hidden behind the sidebar */}
        <Routes>
          <Route path="/" element={<About />} />  {/* Home page */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
