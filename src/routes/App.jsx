import './App.css'
import * as React from "react";
import About from './About.jsx'
import Projects from './Projects.jsx'
import Intro from './Intro.jsx'
import Navbar from './Navbar.jsx'
import Contact from './Contact.jsx'

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
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App
