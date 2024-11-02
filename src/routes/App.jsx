import './App.css'
import * as React from "react";
import About from './About.jsx'
import Projects from './Projects.jsx'
import Intro from './Intro.jsx'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Intro />
      <div id="about">
        <About/>
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  )
}

export default App
