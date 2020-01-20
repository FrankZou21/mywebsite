import React from "react";
import linkdin from "../Images/linkdin.png"
import facebook from "../Images/facebook.png"
import github from "../Images/github.png"
import mail from "../Images/mail.png"
import "./styles/Footer.css"

export default function Footer() {  
  
  return (
    <div className="footer">
      <img className="footerIcons" onClick={() => {window.open("https://www.facebook.com/frank.zou.56", '_blank')}} src={facebook} />
      <img className="footerIcons" onClick={() => {window.open("https://www.linkedin.com/in/frank-zou-a71808132/", '_blank')}} src={linkdin} />
      <img className="footerIcons" onClick={() => {window.open("https://github.com/FrankZou21", '_blank')}} src={github} />
      <img className="footerIcons" onClick={() => {window.open("mailto:frankzou2000@hotmail.com.com", '_blank')}} src={mail} />
    </div>
  );
}


