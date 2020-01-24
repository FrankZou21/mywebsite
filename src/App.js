import React, {useState, useRef} from 'react';
import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Resume from "./components/Resume.js"
import Footer from "./components/Footer.js"
import "./App.css"

const ABOUT = 'ABOUT'
const PROJECTS = 'PROJECTS'
const RESUME = 'RESUME'

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
    <div ref={myRef} className="navBarBox">
    <ul className="navBar">
      <em><div className="appButton" onClick = {() => {setDisplay(ABOUT)}}>About</div></em>
      <em><div className="appButton" onClick = {() => {setDisplay(PROJECTS)}}>Projects</div></em>
      <em><div className="appButton" onClick = {() => {setDisplay(RESUME)}}>Resume</div></em>
    </ul>
    </div>
    <div>
     {display === ABOUT && <About />}
     {display === PROJECTS && <Projects />}
     {display === RESUME && <Resume />}
     </div>

     <div>
       <Footer />
     </div>
     </>
  );
}

export default App;
