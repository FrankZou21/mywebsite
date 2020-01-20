import React from "react";
import "./styles/Language.css"

export default function Language({language}) {  

  return (
    <div className="languageCircle">
      <div className="languageText">
        {language}
      </div>
    </div>
  );
}