import React from "react";
import "./styles/About.css"
import aboutImage from "../Images/About_Image.jpg"

export default function About() {

  return (
    <div className='aboutLayout'>
      <div className='aboutImage'>
        <img src={aboutImage} className='aboutImageSize'/>
      </div>
      <div className='aboutText'>
        <h1>
          Who Am I?
        </h1>
        <p>
          I am a aspiring programmer who is passionate about learning and developing innovative ways to solve problems.
        </p>
        <p>
          I am constantly trying to improve my skills. Currently I am playing around with Angular
           and React. I am skilled in a variety of areas in web design and development. Some of my skills include: 
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Ruby On Rails</li>
          <li>PostgreSQL</li>
          <li>React</li>
          <li>React-Native</li>
          <li>AutoCAD</li>
        </ul>
      </div>
    </div>
  );
}
