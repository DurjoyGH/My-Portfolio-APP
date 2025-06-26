// App.js
import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import ProblemSolving from './component/ProblemSolving/ProblemSolving';
import About from './component/About/About';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ProblemSolving />
      <Contact />
    </div>
  );
}

export default App;
