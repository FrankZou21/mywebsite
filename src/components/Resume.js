import React from "react";
import "./styles/Resume.css"
import Language from "./Language.js"

const languages = ["Javascript", "Ruby", "C++", "HTML", "CSS", "SQL"]
const libraries = ["React", "Ajax", "JQuery", "React-Native", "ViroReact(AR)", "Axios"]
const frameworks = ["Bootstrap", "Express", "Jest", "Cypress"]
const environment = ["Node.js", "PostgreSQL", "MangoDB"]
export default function Resume() {  

  const displayLanguages = languages.map((language) => {
    return (
      <Language
        language={language}
      />
    );
  });
  
  return (
    <div className="resumeBox">
        <div className="skillsBox">
          <div style={{width:"40%"}}>
            <div className="skillsTitle">Languages</div>
            <div className="languagesBox">{displayLanguages}</div>
          </div>
          <div className="restSkillsBox">
            <div className="restSkillsInnerBox">
              <div>
                <div className="skillsTitle">Frameworks</div>
                <ul>Bootstrap</ul>
                <ul>Express</ul>
                <ul>Jest</ul>
                <ul>Cypress</ul>
              </div>
              <div>
                <div className="skillsTitle">Environments</div>
                <ul>Node.js</ul>
                <ul>PostgreSQL</ul>
                <ul>MangoDB</ul>
              </div>
            </div>
              <div >
                <div className="skillsTitle">Libraries</div>
                  <div className="skillsList">
                    <div>
                      <ul>React</ul>
                      <ul>React-Native</ul>
                      <ul>ViroReact(AR)</ul>
                    </div>
                    <div>
                      <ul>Ajax</ul>
                      <ul>JQuery</ul>
                      <ul>Axios</ul>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="resumeBtn" onClick={() => { window.open("https://resume.creddle.io/resume/5pu1euhgfhg", '_blank') }}>Check Out The Resume</div>
    </div>
  );
}