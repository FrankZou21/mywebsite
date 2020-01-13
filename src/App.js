import React, {useState, useRef} from 'react';
import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import "./App.css"

const ABOUT = 'ABOUT'
const PROJECTS = 'PROJECTS'
const CONTACT = 'CONTACT'

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop,
  behavior: 'smooth'
  })

function App() {
  const [display, setDisplay] = useState(ABOUT)
  const myRef = useRef(null)
  const scrollToAbout = () => scrollToRef(myRef)

  return (
    <>
    <div>
      <Home scrollToAbout = {scrollToAbout}/>
    </div>
   
    <ul className="navBar">
      <em><div className="appButton" onClick = {() => {setDisplay(ABOUT)}}>About</div></em>
      <em><div className="appButton" onClick = {() => {setDisplay(PROJECTS)}}>Projects</div></em>
      <em><div className="appButton" onClick = {() => {setDisplay(CONTACT)}}>Contact</div></em>
    </ul>
    <div ref={myRef}>
     {display === ABOUT && <About />}
     {display === PROJECTS && <Projects />}
     {display === CONTACT && <Contact />}
     </div>
     </>
  );
}

export default App;
