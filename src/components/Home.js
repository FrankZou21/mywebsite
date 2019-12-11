import React from "react";
import "./styles/Home.css"

const backgroundImages = [
  "https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=1000&q=80",
  ""
]

export default function Home() {

  // const backgroundImageString = `url('${backgroundImages[0]}')`;

  return (
    <div className = 'backgroundStyle'>
      <div className = 'textStyle'>
      <span>Hello, My name is Frank Zou</span><span>I am an aspiring Full-Stack Web Developer</span>
     </div>
    </div>
  );
}
