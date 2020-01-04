import React, {useState} from 'react';
import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"

const ABOUT = 'ABOUT'
const PROJECTS = 'PROJECTS'
const CONTACT = 'CONTACT'

function App() {
  const [display, setDisplay] = useState(ABOUT)

  return (
    <>
    <div>
      <Home />
    </div>
    <ul>
      <em onClick = {() => {setDisplay(ABOUT)}}>About</em>
      <em onClick = {() => {setDisplay(PROJECTS)}}>Projects</em>
      <em onClick = {() => {setDisplay(CONTACT)}}>Contact</em>
    </ul>
    <div>
     {display === ABOUT && <About />}
     {display === PROJECTS && <Projects />}
     {display === CONTACT && <Contact />}
     </div>
     </>
  );
}

export default App;
