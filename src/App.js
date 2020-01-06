import React, {useState} from 'react';
import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import "./App.css"

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
   
    <ul className="navBar">
      <em><div className="appButton" onClick = {() => {setDisplay(ABOUT)}}>About</div></em>
      <em><div className="appButton" onClick = {() => {setDisplay(PROJECTS)}}>Projects</div></em>
      <em><div className="appButton" onClick = {() => {setDisplay(ABOUT)}}>Contact</div></em>
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
